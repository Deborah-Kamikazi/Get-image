const generate = document.getElementById("generate");
const cards = document.getElementById("cards");
let page = 1
async function generateGallery() {
  // Request
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=100`,
  );
  const data = await response.json();
  const randomOrder = data.slice(0,10).sort(() => 0.5 - Math.random());
  page++
  // console.log(page);

  // Populate the UI
  const images = randomOrder.map((image: any) => {
    const img = document.createElement("img");
    img.src = image.download_url;
    // img.className = "w-full aspect-square object-cover rounded-full";
    // img.className = "w-full aspect-square object-cover rounded-2xl";
    img.className = "w-full aspect-square object-cover rounded-lg";
    // img.className = "w-full aspect-square object-cover";
    img.alt = "Couldn't display😭";
    return img.outerHTML;
  });

  cards!.innerHTML = images.join("");
}

generate?.addEventListener("click", generateGallery);