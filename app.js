async function renderTopics(){
    console.log('rendering topics')
    try{
        renderTopicOne()
        renderTopicTwo()
        renderTopicThree()
        renderTopicFour()
        renderTopicFive()
        renderTopicSix()
    }
    catch(e){
        alert('Jeopary API is DOWN')
    }
}

// RENDER TOPIC ONE
async function renderTopicOne(){
    let topicSearchOne = await axios.get('https://jservice.io/api/random')

    // TOPIC ONE
    let topicOneID = topicSearchOne.data[0].category_id
    let topicOne = await axios.get(`https://jservice.io/api/category?id=${topicOneID}`)
    $(".topicOneDiv").text(topicOne.data.title)
    console.log(topicOneID, topicOne.data.title)
    console.log(topicOne)

    // TOPIC ONE CLUES
    let clueOneOne = topicOne.data.clues[0].question
    let clueOneTwo = topicOne.data.clues[1].question
    let clueOneThree = topicOne.data.clues[2].question
    let clueOneFour = topicOne.data.clues[3].question
    let clueOneFive = topicOne.data.clues[4].question

    // TOPIC ONE ANSWERS
    let answerOneOne = topicOne.data.clues[0].answer
    let answerOneTwo = topicOne.data.clues[1].answer
    let answerOneThree = topicOne.data.clues[2].answer
    let answerOneFour = topicOne.data.clues[3].answer
    let answerOneFive = topicOne.data.clues[4].answer

    // TOPIC ONE COLUMN ONE CLICK
    let topicOneColOne = document.querySelector('.topicOneColOne');
    topicOneColOne.addEventListener('click', function(){
        topicOneColOne.innerHTML = clueOneOne
        topicOneColOne.setAttribute('class', 'topicOneColOneClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicOneColOneAnswer = document.querySelector('.topicOneColOneClue');
        topicOneColOneAnswer.addEventListener('click', function(){
            topicOneColOneAnswer.innerText = answerOneOne
        })
    })

        // TOPIC ONE COLUMN TWO CLICK
    let topicOneColTwo = document.querySelector('.topicOneColTwo');
    topicOneColTwo.addEventListener('click', function(){
        topicOneColTwo.innerHTML = clueOneTwo
        topicOneColTwo.setAttribute('class', 'topicOneColTwoClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicOneColTwoAnswer = document.querySelector('.topicOneColTwoClue');
        topicOneColTwoAnswer.addEventListener('click', function(){
            topicOneColTwoAnswer.innerText = answerOneTwo
        })
    })

    // TOPIC ONE COLUMN THREE CLICK
    let topicOneColThree = document.querySelector('.topicOneColThree');
    topicOneColThree.addEventListener('click', function(){
        topicOneColThree.innerHTML = clueOneThree
        topicOneColThree.setAttribute('class', 'topicOneColThreeClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicOneColThreeAnswer = document.querySelector('.topicOneColThreeClue');
        topicOneColThreeAnswer.addEventListener('click', function(){
            topicOneColThreeAnswer.innerText = answerOneThree
        })
    })

    // TOPIC ONE COLUMN FOUR CLICK
    let topicOneColFour = document.querySelector('.topicOneColFour');
    topicOneColFour.addEventListener('click', function(){
        topicOneColFour.innerHTML = clueOneFour
        topicOneColFour.setAttribute('class', 'topicOneColFourClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicOneColFourAnswer = document.querySelector('.topicOneColFourClue');
        topicOneColFourAnswer.addEventListener('click', function(){
            topicOneColFourAnswer.innerText = answerOneFour
        })
    })

    // TOPIC ONE COLUMN FIVE CLICK
    let topicOneColFive = document.querySelector('.topicOneColFive');
    topicOneColFive.addEventListener('click', function(){
        topicOneColFive.innerHTML = clueOneFive
        topicOneColFive.setAttribute('class', 'topicOneColFiveClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicOneColFiveAnswer = document.querySelector('.topicOneColFiveClue');
        topicOneColFiveAnswer.addEventListener('click', function(){
            topicOneColFiveAnswer.innerText = answerOneFive
        })
    })
}


// RENDER TOPIC TWO
async function renderTopicTwo(){
    let topicSearchTwo = await axios.get('https://jservice.io/api/random')
    // TOPIC TWO
    let topicTwoID = topicSearchTwo.data[0].category_id
    let topicTwo = await axios.get(`https://jservice.io/api/category?id=${topicTwoID}`)
    $(".topicTwoDiv").text(topicTwo.data.title)
    console.log(topicTwoID, topicTwo.data.title)

    // TOPIC TWO CLUES
    let clueTwoOne = topicTwo.data.clues[0].question
    let clueTwoTwo = topicTwo.data.clues[1].question
    let clueTwoThree = topicTwo.data.clues[2].question
    let clueTwoFour = topicTwo.data.clues[3].question
    let clueTwoFive = topicTwo.data.clues[4].question
    
    // TOPIC TWO ANSWERS
    let answerTwoOne = topicTwo.data.clues[0].answer
    let answerTwoTwo = topicTwo.data.clues[1].answer
    let answerTwoThree = topicTwo.data.clues[2].answer
    let answerTwoFour = topicTwo.data.clues[3].answer
    let answerTwoFive = topicTwo.data.clues[4].answer


    // TOPIC TWO COLUMN ONE CLICK
    let topicTwoColOne = document.querySelector('.topicTwoColOne');
    topicTwoColOne.addEventListener('click', function(){
        topicTwoColOne.innerHTML = clueTwoOne
        topicTwoColOne.setAttribute('class', 'topicTwoColOneClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicTwoColOneAnswer = document.querySelector('.topicTwoColOneClue');
        topicTwoColOneAnswer.addEventListener('click', function(){
            topicTwoColOneAnswer.innerHTML = answerTwoOne
        })
    })

    // TOPIC TWO COLUMN TWO CLICK
    let topicTwoColTwo = document.querySelector('.topicTwoColTwo');
    topicTwoColTwo.addEventListener('click', function(){
        topicTwoColTwo.innerHTML = clueTwoTwo
        topicTwoColTwo.setAttribute('class', 'topicTwoColTwoClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicTwoColTwoAnswer = document.querySelector('.topicTwoColTwoClue');
        topicTwoColTwoAnswer.addEventListener('click', function(){
            topicTwoColTwoAnswer.innerHTML = answerTwoTwo
        })
    })

    // TOPIC TWO COLUMN THREE CLICK
    let topicTwoColThree = document.querySelector('.topicTwoColThree');
    topicTwoColThree.addEventListener('click', function(){
        topicTwoColThree.innerHTML = clueTwoThree
        topicTwoColThree.setAttribute('class', 'topicTwoColThreeClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicTwoColThreeAnswer = document.querySelector('.topicTwoColThreeClue');
        topicTwoColThreeAnswer.addEventListener('click', function(){
            topicTwoColThreeAnswer.innerHTML = answerTwoThree
        })
    })

    // TOPIC TWO COLUMN FOUR CLICK
    let topicTwoColFour = document.querySelector('.topicTwoColFour');
    topicTwoColFour.addEventListener('click', function(){
        topicTwoColFour.innerHTML = clueTwoFour
        topicTwoColFour.setAttribute('class', 'topicTwoColFourClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicTwoColFourAnswer = document.querySelector('.topicTwoColFourClue');
        topicTwoColFourAnswer.addEventListener('click', function(){
            topicTwoColFourAnswer.innerHTML = answerTwoFour
        })
    })

    // TOPIC TWO COLUMN FIVE CLICK
    let topicTwoColFive = document.querySelector('.topicTwoColFive');
    topicTwoColFive.addEventListener('click', function(){
        topicTwoColFive.innerHTML = clueTwoFive
        topicTwoColFive.setAttribute('class', 'topicTwoColFiveClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicTwoColFiveAnswer = document.querySelector('.topicTwoColFiveClue');
        topicTwoColFiveAnswer.addEventListener('click', function(){
            topicTwoColFiveAnswer.innerHTML = answerTwoFive
        })
    })
}

// RENDER TOPIC THREE
async function renderTopicThree(){
    let topicSearchThree = await axios.get('https://jservice.io/api/random')
    // TOPIC THREE
    let topicThreeID = topicSearchThree.data[0].category_id
    let topicThree = await axios.get(`https://jservice.io/api/category?id=${topicThreeID}`)
    $(".topicThreeDiv").text(topicThree.data.title)
    console.log(topicThreeID, topicThree.data.title)

    // TOPIC THREE CLUES
    let clueThreeOne = topicThree.data.clues[0].question
    let clueThreeTwo = topicThree.data.clues[1].question
    let clueThreeThree = topicThree.data.clues[2].question
    let clueThreeFour = topicThree.data.clues[3].question
    let clueThreeFive = topicThree.data.clues[4].question
    
    // TOPIC THREE ANSWERS
    let answerThreeOne = topicThree.data.clues[0].answer
    let answerThreeTwo = topicThree.data.clues[1].answer
    let answerThreeThree = topicThree.data.clues[2].answer
    let answerThreeFour = topicThree.data.clues[3].answer
    let answerThreeFive = topicThree.data.clues[4].answer


    // TOPIC THREE COLUMN ONE CLICK
    let topicThreeColOne = document.querySelector('.topicThreeColOne');
    topicThreeColOne.addEventListener('click', function(){
        topicThreeColOne.innerHTML = clueThreeOne
        topicThreeColOne.setAttribute('class', 'topicThreeColOneClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicThreeColOneAnswer = document.querySelector('.topicThreeColOneClue');
        topicThreeColOneAnswer.addEventListener('click', function(){
            topicThreeColOneAnswer.innerHTML = answerThreeOne
        })
    })

    // TOPIC THREE COLUMN TWO CLICK
    let topicThreeColTwo = document.querySelector('.topicThreeColTwo');
    topicThreeColTwo.addEventListener('click', function(){
        topicThreeColTwo.innerHTML = clueThreeTwo
        topicThreeColTwo.setAttribute('class', 'topicThreeColTwoClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicThreeColTwoAnswer = document.querySelector('.topicThreeColTwoClue');
        topicThreeColTwoAnswer.addEventListener('click', function(){
            topicThreeColTwoAnswer.innerHTML = answerThreeTwo
        })
    })

    // TOPIC THREE COLUMN THREE CLICK
    let topicThreeColThree = document.querySelector('.topicThreeColThree');
    topicThreeColThree.addEventListener('click', function(){
        topicThreeColThree.innerHTML = clueThreeThree
        topicThreeColThree.setAttribute('class', 'topicThreeColThreeClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicThreeColThreeAnswer = document.querySelector('.topicThreeColThreeClue');
        topicThreeColThreeAnswer.addEventListener('click', function(){
            topicThreeColThreeAnswer.innerHTML = answerThreeThree
        })
    })

    // TOPIC THREE COLUMN FOUR CLICK
    let topicThreeColFour = document.querySelector('.topicThreeColFour');
    topicThreeColFour.addEventListener('click', function(){
        topicThreeColFour.innerHTML = clueThreeFour
        topicThreeColFour.setAttribute('class', 'topicThreeColFourClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicThreeColFourAnswer = document.querySelector('.topicThreeColFourClue');
        topicThreeColFourAnswer.addEventListener('click', function(){
            topicThreeColFourAnswer.innerHTML = answerThreeFour
        })
    })

    // TOPIC THREE COLUMN FIVE CLICK
    let topicThreeColFive = document.querySelector('.topicThreeColFive');
    topicThreeColFive.addEventListener('click', function(){
        topicThreeColFive.innerHTML = clueThreeFive
        topicThreeColFive.setAttribute('class', 'topicThreeColFiveClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicThreeColFiveAnswer = document.querySelector('.topicThreeColFiveClue');
        topicThreeColFiveAnswer.addEventListener('click', function(){
            topicThreeColFiveAnswer.innerHTML = answerThreeFive
        })
    })

}

// RENDER TOPIC FOUR
async function renderTopicFour(){
    let topicSearchFour = await axios.get('https://jservice.io/api/random')
    // TOPIC FOUR
    let topicFourID = topicSearchFour.data[0].category_id
    let topicFour = await axios.get(`https://jservice.io/api/category?id=${topicFourID}`)
    $(".topicFourDiv").text(topicFour.data.title)
    console.log(topicFourID, topicFour.data.title)

    // TOPIC FOUR CLUES
    let clueFourOne = topicFour.data.clues[0].question
    let clueFourTwo = topicFour.data.clues[1].question
    let clueFourThree = topicFour.data.clues[2].question
    let clueFourFour = topicFour.data.clues[3].question
    let clueFourFive = topicFour.data.clues[4].question
        
    // TOPIC FOUR ANSWERS
    let answerFourOne = topicFour.data.clues[0].answer
    let answerFourTwo = topicFour.data.clues[1].answer
    let answerFourThree = topicFour.data.clues[2].answer
    let answerFourFour = topicFour.data.clues[3].answer
    let answerFourFive = topicFour.data.clues[4].answer

    // TOPIC FOUR COLUMN ONE CLICK
    let topicFourColOne = document.querySelector('.topicFourColOne');
    topicFourColOne.addEventListener('click', function(){
        topicFourColOne.innerHTML = clueFourOne
        topicFourColOne.setAttribute('class', 'topicFourColOneClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFourColOneAnswer = document.querySelector('.topicFourColOneClue');
        topicFourColOneAnswer.addEventListener('click', function(){
            topicFourColOneAnswer.innerHTML = answerFourOne
        })
    })

    // TOPIC FOUR COLUMN TWO CLICK
    let topicFourColTwo = document.querySelector('.topicFourColTwo');
    topicFourColTwo.addEventListener('click', function(){
        topicFourColTwo.innerHTML = clueFourTwo
        topicFourColTwo.setAttribute('class', 'topicFourColTwoClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFourColTwoAnswer = document.querySelector('.topicFourColTwoClue');
        topicFourColTwoAnswer.addEventListener('click', function(){
            topicFourColTwoAnswer.innerHTML = answerFourTwo
        })
    })

    // TOPIC FOUR COLUMN THREE CLICK
    let topicFourColThree = document.querySelector('.topicFourColThree');
    topicFourColThree.addEventListener('click', function(){
        topicFourColThree.innerHTML = clueFourThree
        topicFourColThree.setAttribute('class', 'topicFourColThreeClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFourColThreeAnswer = document.querySelector('.topicFourColThreeClue');
        topicFourColThreeAnswer.addEventListener('click', function(){
            topicFourColThreeAnswer.innerHTML = answerFourThree
        })
    })

    // TOPIC FOUR COLUMN FOUR CLICK
    let topicFourColFour = document.querySelector('.topicFourColFour');
    topicFourColFour.addEventListener('click', function(){
        topicFourColFour.innerHTML = clueFourFour
        topicFourColFour.setAttribute('class', 'topicFourColFourClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFourColFourAnswer = document.querySelector('.topicFourColFourClue');
        topicFourColFourAnswer.addEventListener('click', function(){
            topicFourColFourAnswer.innerHTML = answerFourFour
        })
    })

    // TOPIC FOUR COLUMN FIVE CLICK
    let topicFourColFive = document.querySelector('.topicFourColFive');
    topicFourColFive.addEventListener('click', function(){
        topicFourColFive.innerHTML = clueFourFive
        topicFourColFive.setAttribute('class', 'topicFourColFiveClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFourColFiveAnswer = document.querySelector('.topicFourColFiveClue');
        topicFourColFiveAnswer.addEventListener('click', function(){
            topicFourColFiveAnswer.innerHTML = answerFourFive
        })
    })

}

// RENDER TOPIC FIVE
async function renderTopicFive(){
    let topicSearchFive = await axios.get('https://jservice.io/api/random')
    // TOPIC FIVE
    let topicFiveID = topicSearchFive.data[0].category_id
    let topicFive = await axios.get(`https://jservice.io/api/category?id=${topicFiveID}`)
    $(".topicFiveDiv").text(topicFive.data.title)
    console.log(topicFiveID, topicFive.data.title)

    // TOPIC FIVE CLUES
    let clueFiveOne = topicFive.data.clues[0].question
    let clueFiveTwo = topicFive.data.clues[1].question
    let clueFiveThree = topicFive.data.clues[2].question
    let clueFiveFour = topicFive.data.clues[3].question
    let clueFiveFive = topicFive.data.clues[4].question
        
    // TOPIC FIVE ANSWERS
    let answerFiveOne = topicFive.data.clues[0].answer
    let answerFiveTwo = topicFive.data.clues[1].answer
    let answerFiveThree = topicFive.data.clues[2].answer
    let answerFiveFour = topicFive.data.clues[3].answer
    let answerFiveFive = topicFive.data.clues[4].answer

    // TOPIC FIVE COLUMN ONE CLICK
    let topicFiveColOne = document.querySelector('.topicFiveColOne');
    topicFiveColOne.addEventListener('click', function(){
        topicFiveColOne.innerHTML = clueFiveOne
        topicFiveColOne.setAttribute('class', 'topicFiveColOneClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFiveColOneAnswer = document.querySelector('.topicFiveColOneClue');
        topicFiveColOneAnswer.addEventListener('click', function(){
            topicFourColOneAnswer.innerHTML = answerFiveOne
        })
    })

    // TOPIC FIVE COLUMN TWO CLICK
    let topicFiveColTwo = document.querySelector('.topicFiveColTwo');
    topicFiveColTwo.addEventListener('click', function(){
        topicFiveColTwo.innerHTML = clueFiveTwo
        topicFiveColTwo.setAttribute('class', 'topicFiveColTwoClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFiveColTwoAnswer = document.querySelector('.topicFiveColTwoClue');
        topicFiveColTwoAnswer.addEventListener('click', function(){
            topicFourColTwoAnswer.innerHTML = answerFiveTwo
        })
    })

    // TOPIC FIVE COLUMN THREE CLICK
    let topicFiveColThree = document.querySelector('.topicFiveColThree');
    topicFiveColThree.addEventListener('click', function(){
        topicFiveColThree.innerHTML = clueFiveThree
        topicFiveColThree.setAttribute('class', 'topicFiveColThreeClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFiveColThreeAnswer = document.querySelector('.topicFiveColThreeClue');
        topicFiveColThreeAnswer.addEventListener('click', function(){
            topicFourColThreeAnswer.innerHTML = answerFiveThree
        })
    })

    // TOPIC FIVE COLUMN FOUR CLICK
    let topicFiveColFour = document.querySelector('.topicFiveColFour');
    topicFiveColFour.addEventListener('click', function(){
        topicFiveColFour.innerHTML = clueFiveFour
        topicFiveColFour.setAttribute('class', 'topicFiveColFourClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFiveColFourAnswer = document.querySelector('.topicFiveColFourClue');
        topicFiveColFourAnswer.addEventListener('click', function(){
            topicFourColFourAnswer.innerHTML = answerFiveFour
        })
    })

    // TOPIC FIVE COLUMN FIVE CLICK
    let topicFiveColFive = document.querySelector('.topicFiveColFive');
    topicFiveColFive.addEventListener('click', function(){
        topicFiveColFive.innerHTML = clueFiveFive
        topicFiveColFive.setAttribute('class', 'topicFiveColFiveClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicFiveColFiveAnswer = document.querySelector('.topicFiveColFiveClue');
        topicFiveColFiveAnswer.addEventListener('click', function(){
            topicFourColFiveAnswer.innerHTML = answerFiveFive
        })
    })

}

// RENDER TOPIC SIX
async function renderTopicSix(){
    let topicSearchSix = await axios.get('https://jservice.io/api/random')
    // TOPIC SIX
    let topicSixID = topicSearchSix.data[0].category_id
    let topicSix = await axios.get(`https://jservice.io/api/category?id=${topicSixID}`)
    $(".topicSixDiv").text(topicSix.data.title)
    console.log(topicSixID, topicSix.data.title)

    // TOPIC FIVE CLUES
    let clueSixOne = topicSix.data.clues[0].question
    let clueSixTwo = topicSix.data.clues[1].question
    let clueSixThree = topicSix.data.clues[2].question
    let clueSixFour = topicSix.data.clues[3].question
    let clueSixFive = topicSix.data.clues[4].question
        
    // TOPIC FIVE ANSWERS
    let answerSixOne = topicSix.data.clues[0].answer
    let answerSixTwo = topicSix.data.clues[1].answer
    let answerSixThree = topicSix.data.clues[2].answer
    let answerSixFour = topicSix.data.clues[3].answer
    let answerSixFive = topicSix.data.clues[4].answer

    // TOPIC SIX COLUMN ONE CLICK
    let topicSixColOne = document.querySelector('.topicSixColOne');
    topicSixColOne.addEventListener('click', function(){
        topicSixColOne.innerHTML = clueSixOne
        topicSixColOne.setAttribute('class', 'topicSixColOneClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicSixColOneAnswer = document.querySelector('.topicSixColOneClue');
        topicSixColOneAnswer.addEventListener('click', function(){
            topicSixColOneAnswer.innerHTML = answerSixOne
        })
    })

    // TOPIC SIX COLUMN TWO CLICK
    let topicSixColTwo = document.querySelector('.topicSixColTwo');
    topicSixColTwo.addEventListener('click', function(){
        topicSixColTwo.innerHTML = clueSixTwo
        topicSixColTwo.setAttribute('class', 'topicSixColTwoClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicSixColTwoAnswer = document.querySelector('.topicSixColTwoClue');
        topicSixColTwoAnswer.addEventListener('click', function(){
            topicSixColTwoAnswer.innerHTML = answerSixTwo
        })
    })

    // TOPIC SIX COLUMN THREE CLICK
    let topicSixColThree = document.querySelector('.topicSixColThree');
    topicSixColThree.addEventListener('click', function(){
        topicSixColThree.innerHTML = clueSixThree
        topicSixColThree.setAttribute('class', 'topicSixColThreeClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicSixColThreeAnswer = document.querySelector('.topicSixColThreeClue');
        topicSixColThreeAnswer.addEventListener('click', function(){
            topicSixColThreeAnswer.innerHTML = answerSixThree
        })
    })

    // TOPIC SIX COLUMN FOUR CLICK
    let topicSixColFour = document.querySelector('.topicSixColFour');
    topicSixColFour.addEventListener('click', function(){
        topicSixColFour.innerHTML = clueSixFour
        topicSixColFour.setAttribute('class', 'topicSixColFourClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicSixColFourAnswer = document.querySelector('.topicSixColFourClue');
        topicSixColFourAnswer.addEventListener('click', function(){
            topicSixColFourAnswer.innerHTML = answerSixFour
        })
    })

    // TOPIC SIX COLUMN FIVE CLICK
    let topicSixColFive = document.querySelector('.topicSixColFive');
    topicSixColFive.addEventListener('click', function(){
        topicSixColFive.innerHTML = clueSixFive
        topicSixColFive.setAttribute('class', 'topicSixColFiveClue col-2 text-light bg-primary border p-4 p-md-5 text-center')
        let topicSixColFiveAnswer = document.querySelector('.topicSixColFiveClue');
        topicSixColFiveAnswer.addEventListener('click', function(){
            topicSixColFiveAnswer.innerHTML = answerSixFive
        })
    })
}

let button = document.querySelector('button');
button.addEventListener('click', function(){
    renderTopics()
})