const aiData = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  getData(data.data.tools);
};
//see more part
const allData = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  allDatas(data.data.tools);
};
const getData = (datas) => {
  const container = document.getElementById("content");
  datas.slice(0, 6).forEach((data) => {
    // data
    container.innerHTML += `
        <div class="card w-100 bg-base-100 shadow-xl p-6 border border-[#e6e4e4]">
        <figure>
          <img
          class="rounded"
            src="${data.image}"
            alt="${data.name}"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-semibold text-2xl">Features</h2>
        <div id="fet_content"></div>
          <div class="card-actions boder-t flex justify-between  ">
          <div>
            <h2 class="font-semibold text-2xl">${data.name}</h2>
            <div class="pt-3 text-[#585858] text-base">
              <i class="fa-solid fa-calendar-days"> <span class="pl-1.5">${data.published_in}</span> </i>
            </div>
          </div>
          <div class="mt-5">
            <i
              class="fa-solid fa-arrow-right bg-[#FEF7F7] text-[#EB5757] p-3 rounded-full "
            ></i>
          </div>
        
          </div>
        </div>
      </div>
        `;
  });
};
//see more part
const allDatas = (datas) => {
  const container = document.getElementById("content");
  container.textContent = "";
  datas.forEach((data) => {
    // data
    container.innerHTML += `
        <div class="card w-100 bg-base-100 shadow-xl p-6 border border-[#e6e4e4]">
        <figure>
          <img
          class="rounded"
            src="${data.image}"
            alt="${data.name}"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-semibold text-2xl">Features</h2>
        <div id="fet_content"></div>
          <div class="card-actions boder-t flex justify-between  ">
          <div>
            <h2 class="font-semibold text-2xl">${data.name}</h2>
            <div class="pt-3 text-[#585858] text-base">
              <i class="fa-solid fa-calendar-days"> <span class="pl-1.5">${data.published_in}</span> </i>
            </div>
          </div>
          <div class="mt-5">
            <i
              class="fa-solid fa-arrow-right bg-[#FEF7F7] text-[#EB5757] p-3 rounded-full "
            ></i>
          </div>
        
          </div>
        </div>
      </div>
        `;
  });
};

const showAlldata = () => {
  document.getElementById("showAll");
  allData();
  const showBnt = document.getElementById("see_more");
  showBnt.style.display = "none";
};

aiData();
