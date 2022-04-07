const dataHandler = (arr) => {
  // console.table(arr); // this is called "dot notation"
  let rand = Math.floor(Math.random() * arr.length);
  rand = rand >= 15 ? rand - 15 : rand;
  let slice = arr.slice(rand, rand + 15);
  console.log(slice)

  const list = document.querySelector('#resto-list')
  slice = slice.map((x) => x.name)
  slice = [...new Set(slice)]

  list.innerHTML = slice.map((x) => `<li>${x}</li>`).join('');
}

async function mainEvent() {
  // the async keyword means we can make API requests
  const form = document.querySelector('.main_form');
  const submitBtn = document.querySelector('#submit')
  submitBtn.style.display = 'none'


  const results = await fetch(
    'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'
  ); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object

  if (arrayFromJson.length > 0) {
    submitBtn.style.display = 'block'
  }
  
    form.addEventListener('submit', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('form submission'); // this is substituting for a "breakpoint"
  
      // arrayFromJson.data - we're accessing a key called 'data' on the returned object
      // it contains all 1,000 records we need
      dataHandler(arrayFromJson)
    });
  }

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
