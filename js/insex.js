const aiData = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  getData(data.data.tools);
};
const getData = (datas) => {
  const container = document.getElementById("content");
  datas.slice(0, 6).forEach((data) => {
    // data
    container.innerHTML += `
        <div class="card w-100 bg-base-100 shadow-xl p-6">
        <figure>
          <img
          class="rounded"
            src="${data.image}"
            alt="${data.name}"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
        <div id="fet_content"></div>
          <div class="card-actions ">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        `;
  });
};

aiData();
