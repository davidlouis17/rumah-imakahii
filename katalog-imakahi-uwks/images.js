// Link halaman Drive diubah menjadi URL thumbnail agar bisa ditampilkan di <img>.
// Google Drive bukan layanan hosting gambar; tampilan tetap bergantung pada izin file.
function driveImageUrl(link) {
  const url = new URL(link);
  if (url.protocol !== "https:" || !["drive.google.com", "www.drive.google.com"].includes(url.hostname)) {
    throw new Error("Gunakan link file Google Drive HTTPS.");
  }
  if (url.pathname.includes("/folders/")) throw new Error("Gunakan link file, bukan folder.");
  const match = url.pathname.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  const id = match ? match[1] : url.searchParams.get("id");
  if (!id || !/^[a-zA-Z0-9_-]+$/.test(id)) throw new Error("ID file Drive tidak ditemukan.");
  const image = new URL("https://drive.google.com/thumbnail");
  image.searchParams.set("id", id);
  image.searchParams.set("sz", "w1600");
  const resourceKey = url.searchParams.get("resourcekey");
  if (resourceKey) image.searchParams.set("resourcekey", resourceKey);
  return image.toString();
}
function imageUnavailable(img) {
  const message = document.createElement("div");
  message.className = "image-error";
  message.setAttribute("role", "img");
  message.setAttribute("aria-label", img.alt + ": foto tidak tersedia");
  message.textContent = img.alt + " — foto belum tersedia";
  img.replaceWith(message);
}
if (typeof document !== "undefined") {
  document.querySelectorAll("img[data-image]").forEach(img => {
    const config = window.KATALOG_IMAGES?.[img.dataset.image];
    if (!config) return;
    img.addEventListener("error", () => imageUnavailable(img), { once: true });
    const link = config.linkGoogleDrive.trim();
    if (!link) { img.src = config.fotoSaatIni; return; }
    try { img.src = driveImageUrl(link); }
    catch (error) { console.warn(img.dataset.image + ": " + error.message); imageUnavailable(img); }
  });
}
if (typeof module !== "undefined") module.exports = { driveImageUrl };
