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

//only 6 data will be showed
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
        <div class="card-body ">
          <h2 class="card-title font-semibold text-2xl">Features</h2>
          <p class='border-b pb-6'>1. ${
            data.features[0] === "" ? "" : data.features[0]
          }<br>
          2. ${data.features[1] === "" ? "" : data.features[1]}<br>
          ${
            typeof data.features[2] === "undefined"
              ? ""
              : "3. " + data.features[2]
          }<br>
       
          </p>
          <div class="card-actions boder-t flex justify-between  pt-4">
          <div>
            <h2 class="font-semibold text-2xl">${data.name}</h2>
            <div class="pt-3 text-[#585858] text-base">
              <i class="fa-solid fa-calendar-days"> <span class="pl-1.5">${
                data.published_in
              }</span> </i>
            </div>
          </div>
          <div class="mt-5">
      <label for="my-modal-3" class="btn bg-white border-0"  onclick="detailsData('${
        data.id
      }')"><i
      class="fa-solid fa-arrow-right bg-[#fce9e9] text-[#EB5757] p-3 rounded-full " 
    ></i></label>
          </div>
        
          </div>
        </div>
      </div>
        `;
  });
  //stop
  spinner(false);
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
        <div class="card-body ">
          <h2 class="card-title font-semibold text-2xl">Features</h2>
          <p class='border-b pb-6'>1. ${
            data.features[0] === "" ? "" : data.features[0]
          }<br>
          2. ${data.features[1] === "" ? "" : data.features[1]}<br>
          ${
            typeof data.features[2] === "undefined"
              ? ""
              : "3. " + data.features[2]
          }<br>
       
          </p>
          <div class="card-actions boder-t flex justify-between  pt-4">
          <div>
            <h2 class="font-semibold text-2xl">${data.name}</h2>
            <div class="pt-3 text-[#585858] text-base">
              <i class="fa-solid fa-calendar-days"> <span class="pl-1.5">${
                data.published_in
              }</span> </i>
            </div>
          </div>
          <div class="mt-5">
      
        <label for="my-modal-3" class="btn bg-white border-0"  onclick="detailsData('${
          data.id
        }')"><i
        class="fa-solid fa-arrow-right bg-[#fce9e9] text-[#EB5757] p-3 rounded-full " 
      ></i></label>
          </div>
        
          </div>
        </div>
      </div>
        `;
  });
  //loder stop
  spinner(false);
};

//show all data part
const showAlldata = () => {
  spinner(true);
  document.getElementById("showAll");
  allData();
  const showBnt = document.getElementById("see_more");
  showBnt.style.display = "none";
};
//lodaer part
const spinner = (loading) => {
  if (loading) {
    document.getElementById("spinnner").classList.remove("hidden");
  } else {
    document.getElementById("spinnner").classList.add("hidden");
  }
};

//deatalis part
const detailsData = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  showDetails(data.data);
};

const showDetails = (data) => {
  //left side
  //title
  document.getElementById("dep").innerText = data.description;
  //pricing
  document.getElementById("basic_p").innerText = `
  ${data.pricing ? data.pricing[0].price : "Free Of Cost/"}
  ${data.pricing ? data.pricing[0].plan : "Basic"}
   `;

  document.getElementById("pro_p").innerText = `
  ${data.pricing ? data.pricing[1].price : "Free Of Cost/"}
  ${data.pricing ? data.pricing[1].plan : "Pro"}
   `;

  document.getElementById("month_p").innerText = `
   ${data.pricing ? data.pricing[1].price : "Free Of Cost/"}
   ${data.pricing ? data.pricing[1].plan : "Enterprise"}
    `;

  //features
  const ulFeat = document.getElementById("features");
  ulFeat.innerHTML = "";
  const fetData = Object.values(data.features);
  if (fetData) {
    fetData.forEach((data) => {
      ulFeat.innerHTML += `<li class="list-disc ml-4">${data.feature_name} </li>`;
    });
  } else {
    ulFeat.innerHTML += `<li class="list-disc ml-4">No Data Found </li>`;
  }

  //integration
  const ulContent = document.getElementById("integra");
  ulContent.innerHTML = "";
  const integrasData = data.integrations;
  if (integrasData) {
    integrasData.forEach((data) => {
      ulContent.innerHTML += `<li class="list-disc ml-4">${data} </li>`;
    });
  } else {
    ulContent.innerHTML += `<li class="list-disc ml-4">No Data Found </li>`;
  }

  //right side
  // image
  document
    .getElementById("content_img")
    .setAttribute("src", data.image_link[0]);
  //rST
  document.getElementById("right_side_title").innerText =
    data.input_output_examples
      ? data.input_output_examples[0].input
      : "Can you give me any example?";

  document.getElementById("right_side_des").innerText =
    data.input_output_examples
      ? data.input_output_examples[0].output
      : "No! Not Yet! Take a break!!!";

  //accuracy

  const aqqqData = Math.round(data.accuracy.score * 100);

  if (aqqqData) {
    document.getElementById("aqqu").classList.remove("hidden");
    document.getElementById("aqqu").innerText = aqqqData + "% accuracy";
  } else {
    document.getElementById("aqqu").classList.add("hidden");
  }
};
spinner(true);
aiData();
