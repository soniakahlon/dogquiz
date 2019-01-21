const data = [
  {num: 1,
    question:
      "This member of the toy group has a dainty and glossy black and tan coat. They are affectionate and sprightly lap dogs.",
    Ans: [
      "Yorkshire-Terrier",
      "Airedale-Terrier",
      "Chihuahua",
      "Japanese-Chin"
    ],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/uP_h-Yorkshire%20Terrier.png",
    imgAlt: "glossy black and tan dog with bow",
    solution: "Yorkshire-Terrier"
  },
  {num: 2,
    question:
      "This distinctly ‘feline’ breed has a large head and short muzzle giving it a look of astonishment. It is no surprise that they are one of Asian royalties most preferred dogs.",
    Ans: ["German-spitz", "Havanese", "Japanese-Chin", "Irish-water-spaniel"],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/iENH-Japanese%20Chin.png",
    imgAlt: "black and white feline looking dog with large head",
    solution: "Japanese-Chin"
  },
  {num:3,
    question:
      "This small but sturdy breed has a hypoallergenic coat that is velvety to the touch. This ‘puff’ dog is also known for their intelligence and charm.",
    Ans: ["Bichon-Frise", "Maltese", "Manchester-Terrier", "Poodle"],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/vrnG-Bichon%20Frise.png",
    imgAlt: "fluffy white dog",
    solution: "Bichon-Frise"
  },
  {num:4,
    question:
      "This breed comes in 3 varieties of sizes.They are often shown with a‘ Continental Clip’ coif. They are fiercely intelligent and expect to be treated like a person.",
    Ans: ["English-Setter", "Pomeranian", "Shih-Tzu", "Poodle"],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/qP5j-Poodle.png",
    imgAlt: "apricot colored dog with curly hair",
    solution: "Poodle"
  },
  {num: 5,
    question:
      "This mischievous companion of chinese and dutch royalty is best described by the latin phrase ‘multum in parvo’.",
    Ans: ["Shih-Tzu", "Pug", "Papillon", "Pekingese"],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/Y0yO-Pug.png",
    imgAlt: "white and brown dog with floppy ears",
    solution: "Pug"
  },
  {num:6,
    question:
      "This humanlike breed is gifted with BIG personality. They come in four colors - red, belge, black and tan, and black.",
    Ans: ["Brussels-Griffon", "Chinese-Crested", "Maltese", "Beagle"],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/Xtc3-Brussels%20Griffon.png",
    imgAlt: "brown dog with large eyes",
    solution: "Brussels-Griffon"
  },
  {num:7,
    question:
      "This breed is the only one native to Cuba. They have a distinctive curled over tail and silky coat.",
    Ans: ["Havanese", "Papillon", "Italian-Greyhound", "Portuguese-Water-Dog"],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/nso2-Havanese.png",
    imgAlt: "white and light brown dog with long hair",
    solution: "Havanese"
  },
  {num:8,
    question:
      "This one - of - a - kind breed sports large bat ears as it’s trademark feature. They have a square head with heavy wrinkles above their extremely short nose.",
    Ans: [
      "Brussels-Griffon",
      "French-Bulldog",
      "Affenpinscher",
      "Boston-Terrier"
    ],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/XeFh-French%20Bulldog.png",
    imgAlt: "white dog with flat nose",
    solution: "French-Bulldog"
  },
  {num:9,
    question:
      "This breeds more recognizable feature is their tight tuxedo jacket. They have earned the nickname ‘America’s Gentleman’.",
    Ans: [
      "Italian-Greyhound",
      "Silky-Terrier",
      "Boston-Terrier",
      "Coton-de-Tulear"
    ],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/8Q_j-Boston%20Terrier.png",
    imgAlt: "black and white dog with pointy ears",
    solution: "Boston-Terrier"
  },
  {num: 10,
    question:
      "This aristocratic breed is known their regal grace and even temper. They are a perfect combination of lap dog and athletic sporting dog.",
    Ans: [
      "Portuguese Water Dog",
      "Cavalier-King-Charles-Spaniel",
      "Havanese",
      "Chihuahua"
    ],
    imgSrc:
      "https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/K4kJ-Cavalier%20King%20Charles.png",
    imgAlt: "medium,dark brown and white dog with very long floppy ears",
    solution: "Cavalier-King-Charles-Spaniel"
  }
];

//generate form with question(and image) and answers, and score/current question #//
let correctAns = 0;
let currentQuestion = 0;

function generateQuestion() {
  return `
  <section id="question-page" role = "main">
  <h2 id = "question">${data[currentQuestion].question}</h2>
  <img id = "indivImage" src = ${data[currentQuestion].imgSrc} alt = ${
    data[currentQuestion].imgAlt
  }>

  
    <form class="question-form">
      <fieldset>
        <label>${data[currentQuestion].Ans[0]}
          <input type="radio" name="dogbreed" value=${data[currentQuestion].Ans[0]} required></input></label>
          
        <label>${data[currentQuestion].Ans[1]}
          <input type="radio" name="dogbreed" value=${data[currentQuestion].Ans[1]} ></input></label>
  
        <label>${data[currentQuestion].Ans[2]}
          <input type="radio" name="dogbreed" value=${data[currentQuestion].Ans[2]}></input></label>
  
        <label>${data[currentQuestion].Ans[3]}
          <input type="radio" name="dogbreed" value=${data[currentQuestion].Ans[3]}></input></label>
  </fieldset>  
  <button id="js-submit-button">SUBMIT</button>
  </form>

  <ul>
				<li>Question Number: <span class="questionNumber">${
          data[currentQuestion].num
        }/10</span></li>
			  <li>Score: <span class="score">${correctAns} correct out of ${
    data[currentQuestion].num
  }</span></li>
	</ul>
  </section>`;
}
function renderStartPage(){

      $('#container').html(`<section id="home-page" role="main">
        <img
          id="body-image"
          src="https://uploads.codesandbox.io/uploads/user/7b2eda95-3c1e-43cb-8c4e-94fb1dce01d2/4cib-Main%20Page%20Op1.png"
          alt="Main Pic"
        />
        <h1>How Well Do You Know Your Furry Friends?</h1>
        <h2>Let's find out!</h2>
        <button id="js-start-button">PRESS YOUR PAW HERE!</button>
      </section>`);
}
//allow home-page start button to start quiz and move to first question form//
function handleStartButton() {
  $("#container").on('click','#js-start-button', function(event){
    event.preventDefault();
    nextQuestion();
  
  });
}

function handleSubmitButton() {
 
  $('#container').on('submit', '.question-form', function(event) { 
    event.preventDefault(); 
   
  let selected = $('input:checked'); 
  let theAnswer = selected.val(); 
  let rightAnswer = `${data[currentQuestion].solution}`; 
  if (theAnswer === rightAnswer) {  
    genCorrectFeed(); 
    } else { 
    genIncorrectFeed(); 
      } 
   }); 
 };
//generate the quetion form according to above template//
function nextQuestion() {
  $("#container").html(generateQuestion());
}
//allow next button to move to next form with questions/answers//
function handleNextButton() {
  $('#container').on("click", "#js-next-button", function(event) {
    event.preventDefault();
    if (`${data[currentQuestion].num}` === "10") {
      resultsPage();
    } else {
      incrementQuestion();
      nextQuestion();
     
    }
  });
}
function incrementQuestion() {
  currentQuestion++;
}
//generate correct feedback and next button//
function genCorrectFeed() {
  const correctFeed =`<h3>Correct! You know your canines!</h3>
  <button id="js-next-button">NEXT</button>`
  $("#container").html(correctFeed);

  incrementCorrectAns();
  
}

function incrementCorrectAns() {
  correctAns++;
}
//generate incorrect feedback and next button//
function genIncorrectFeed() {
  const inCorrFeed = `<h3> Looks like you're barking up the wrong tree! The correct answer is ${
    data[currentQuestion].solution
  }</h3>
  <button id="js-next-button">NEXT</button>`
  $("#container").html(inCorrFeed);
  
}

function resultsPage() {
  $("#container").html(
    `<h3>Your Score Is: <span class="score">${correctAns}/10 correct!</span></h3>
    <button id='js-restart-button'>START AGAIN?</button>`
  );
  
}

function handleRestartButton() {

  $('#container').on("click", "#js-restart-button", function(event) {
    event.preventDefault();
    correctAns=0;
    currentQuestion=0;
       renderStartPage();
  });
}

function init(){

handleNextButton();
handleSubmitButton();
handleStartButton();
handleRestartButton();
}
//document on ready function//
$(init);


 
