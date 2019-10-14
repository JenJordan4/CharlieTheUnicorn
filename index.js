const  readlineSync  =  require('readline-sync');

const scenes = [
    {
        name: "Beginning",
        dialogue: [
            "You are Charlie the Unicorn.",
            "You are asleep in a lush, green meadow.",
            "A gentle breeze caresses your silvery unicorn hair.",
            "You are content."
        ],
        options: [
            {
                resultingScene: 1,
                text: "Continue..."
            },
            // {
            //     resultingScene: -1,
            //     text: "Game over"
            // }
        ],
        endingQuestion: "Continue?"
    },
    {
        name: "Approach",
        dialogue: [
            "You hear the distinct sound of eight hooves crunching the meadow grass.",
            "Your ears twitch. You try to ignore it.",
            "Blue Unicorn: \"Heeeeeey Charliee, hey Charlieee, wake up!\"",
            "Your ears twitch again. Maybe they'll go away."
        ],
        options: [
            {
                resultingScene: 2,
                text: "Continue..."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name:  "Time to Wake Up",
        dialogue: [
            "Pink Unicorn: \"Yeah Charlie, you silly sleepy head, wake uuuup.\"",
            "You: \"Ughh. This had better be pretty frickin' important. Is the meadow on fire?\""
        ],
        options: [
            {
                resultingScene:  3,
                text: "Continue..."
            }
        ],
        endingQuestion: "Continue?"
    },    
    {
        name:  "Your Mission",
        dialogue: [
            "Blue: \"No, Charlie. We found a map to Candy Mountain. Candy Mountain, Charlie!\"",
            "Pink: \"Yeah, Charlie! We’re going to Caaandy Mountaiiinnn. Come with us, Charlieee!\"",
            "Blue: \"Yeah, Charlie. It will be an adventure. We’re going on an adventure, Charlie!\"",
            "You: (Unfazed) \"Yeah, Candy Mountain. Right. I'm just gonna, you know, go back to sleep now.\""
        ],
        options: [
            {
                resultingScene: 4,
                text: "Continue..."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name: "End Your Misery Now",
        dialogue: [
            "Blue Unicorn: \"Nooooo! Charlie, you have to come with us to Candy Mountain.\" *bounces on you*",
            "Pink: \"Yeah, Charlie! Candy Mountain! It's a land of sweets and joy... and joyness.\"",
        ],
        options: [
            {
                resultingScene: 5,
                text: "You tell them to get off your frickin' lawn. You're not going to Candy Mountain, you're going back to Snooze Town."
            },
            {
                resultingScene: 6,
                text: "It seems like the only way to get them to shut up is to go along with them."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name: "Sweet Release",
        dialogue: [
            "You return to your meadow and go back to sleep.",
            "Even in sleep, Blue and Pink haunt you.",
            "They are endlessly dancing around you and singing \"On the Good Ship Lollipop.\"",
             
        ],
        options: [
            {
                resultingScene: -1,
                text: "END GAME"
            }
        ],
        endingQuestion: "GAME OVER 🍬🍭⛰"
    },
    {
        name: "The Cave",
        dialogue: [
            "You walk with Blue and Pink to a cave on the edge of the meadow.",
            "It is cold and damp, and your hairs stand on end.",
            "You: \"Alright guys, you do know there's no actual Candy Mountain, right?\"",
            "Pink and Blue: \"Shun the non-believer! Shunnnnn!\""
        ],
        options: [
            {
                resultingScene: 7,
                text: "Continue..."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name: "Meet Lio",
        dialogue: [
            "You three reach a dead end of the cave. Sitting on a rock is a liopleurodon.",
            "Blue Unicorn: \"It's a magical liopleurodon, Charlie!\"",
            "Pink Unicorn: \"Maaaagical liopleurodonnnn!\"",
            "Liopleurodon: \"Aaaaargh! Raaaaawr!\"" 
        ],
        options: [
            {
                resultingScene: 8,
                text: "Continue"
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name:  "Prophecy",
        dialogue: [
            "Blue Unicorn: \"It has spoken.\"",
            "Pink Unicorn: \"It has shown us the waaay!\""
        ],
        options: [
            {
                resultingScene: 5,
                text: "\"I must be having a hallucination. Liopleurodons have been extinct for millions of years. I'm outta hea'.\""
            },
            {
                resultingScene: 9,
                text: "\"Thank you so much, noble liopleurodon, for sharing your secrets.\""
            },
            {
                resultingScene: 11,
                text: "\"OK, Mr. Liopleurodon, if that's even your real name. Everyone knows Candy Mountain doesn't exist. Quit yankin' our chains.\""
            }
        ],
        endingQuestion: "What do you say?"
    },
    {
        name: "Noble Lio",
        dialogue: [
            "The liopleurodon looks surprised and impressed.",
            "Liopleurodon:\"Aaaaargh! Raaaaawr!\"",
            "Blue Unicorn: \"Yaaay! He gave us a faster route!\"",
            "Pink Unicorn: \"Thaaaank you, Charlie! Thaaaanks!\"" 
        ],
        options: [
            {
                resultingScene: 12,
                text: "Continue..."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name: "Falling For It",
        dialogue: [
            "You think about that look in the liopleurodon's beady little eyes.",
            "It seems like he was keeping something from you.",
            "As you ponder, you fail to notice that the 3rd plank in the footbridge is missing.",
             
        ],
        options: [
            {
                resultingScene: -1,
                text: "GAME OVER 🍬🍭⛰"
            }
        ],
        endingQuestion: "You fall to your death. If only you had stayed in the meadow."
    },
    {
        name:  "Bridge of Hope and Wonder",
        dialogue: [
            "The three of you follow the liopleurodon's directions to Candy Mountain.",
            "You arrive at a footbridge between two cliffs. It looks like it should be condemned.",
            "Blue Unicorn: \"It's just over this bridge, Charlie.\"",
            "Pink Unicorn: \"This maaagical bridge of hope and wonder!\"",
            "You: \"Is anyone else getting, like, covered in splinters?",
            "Seriously, guys. We shouldn't be on this thing.\""
        ],
        options: [
            {
                resultingScene: 10,
                text: "Think about the liopleurodon's motives."
            },
            {
                resultingScene: 12,
                text: "Walk cautiously across the bridge."
            }
        ],
        endingQuestion: "What do you do?"
    },
    {
        name: "We're Here",
        dialogue: [
            "Somehow, against all odds, you safely make it there.",
            "Blue Unicorn: \"Hey, Charlie. Chaarliee. Chaaaaarrrrllllliiieee.\"",
            "You: \"WHAT?! I'm right here!\"",
            "Blue Unicorn: \"We're here, Charlie!\"",
            "Pink Unicorn: \"We're heeeere!\""
             
        ],
        options: [
            {
                resultingScene: 13,
                text: "Continue..."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name:  "Not a 5-Star Review",
        dialogue: [
            "You look up. In front of you is a bubblegum pink mountain, no bigger than 3 unicorns high.",
            "You could have sworn that mountains were bigger than this.",
            "The mountain smells of fresh paint, and has bits of candy glued to it."
        ],
        options: [
            {
                resultingScene: 14,
                text: "Continue..."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name: "Magical Wonders",
        dialogue: [
            "You: \"Well, whad'ya know? There actually is a Candy Mountain.\"",
            "Blue Unicorn: 🎶\"Candy Mountain! Candy Mountain! You fill me with sweet, sugary goodness!\"🎶",
            "Pink Unicorn: \"Go inside the Candy Mountain cave, Charlie.\"",
            "Blue Unicorn: \"Yeah, Charlieee! Go inside the cave!\"",
            "Pink Unicorn: \"Experience the magical wonders that behold when you enter!\""  
        ],
        options: [
            {
                resultingScene: 5,
                text: "\"Go take a hike. Maybe up your stupid Candy Mountain. I'm going back to my meadow.. if it isn't on fire.\""
            },
            {
                resultingScene: 15,
                text: "\"Ehh. I'm not too sure about this, you guys.\""
            },
            {
                resultingScene: 20,
                text: "\"Alright, FINE! I'll go into the frickin' candy cave.\""
            }
        ],
        endingQuestion: "What do you say?"
    },
    {
        name:  "I Dunno...",
        dialogue: [
            "You: \"Thanks, but no thanks. I think I'm gonna stay out here.",
            "Pink Unicorn: \"But you have to enter the cave, Charlie! You haaaave toooo!\"",
            "The C A N D Y of the Candy Mountain sign above the entrance comes to life.\"",
            "Blue Unicorn: \"Look, Charlie! They want to sing to you!\"",
            "Pink Unicorn: \"An honor!\""
        ],
        options: [
            {
                resultingScene: 20,
                text: "\"NO! I frickin' HATE musical numbers. I'll go in the cave if you shut up.\""
            },
            {
                resultingScene: 16,
                text: "Let the C A N D Y letters sing to you."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name: "Candy Song 1",
        dialogue: [
            "C A N D Y letters: 🎶\"Ohhh! When you're down and looking for some cheering up,",
            "then just head right up,",
            "to the candy mountain cave!\"🎶"
        ],
        options: [
            {
                resultingScene: 17,
                text: "You're stuck listening to this awful music."
            }
        ],
        endingQuestion: "Continue listening to the song?"
    },
    {
        name: "Candy Song 2",
        dialogue: [
            "C A N D Y letters: 🎶\"When you get inside, you'll find yourself a cheery land,",
            "such a happy and joy-filled and perky merry land!",
            "They've got lollipops and gummy drops and candy things,",
            "oh so many things, that will brighten up your day!\"🎶"
        ],
        options: [
            {
                resultingScene: 18,
                text: "You're still stuck listening to this awful music."
            }
        ],
        endingQuestion: "Continue listening to the song?"
    },
    {
        name: "Candy Song 3",
        dialogue: [
            "C A N D Y letters: 🎶\"It's impossible to wear a frown",
            "in candy town.",
            "It's the mecca of lovely candy cave!",
            "They’ve got jelly beans and coconuts with little hats,",
            "candy mats, chocolate bats,",
            "it's a wonderland of sweets!\"🎶"
        ],
        options: [
            {
                resultingScene: 19,
                text: "You are resigned to your fate."
            }
        ],
        endingQuestion: "Continue listening to the song?"
    },
    {
        name: "Candy Song 4",
        dialogue: [
            "C A N D Y letters: 🎶\"Ride the candy train to town and hear the candy band,",
            "candy bells, it's a treat as they march across the land!",
            "Cherry ribbons stream across the sky and into the ground,",
            "turn around, it astounds,",
            "it's the dancing candy tree!",
            "And the candy cane imaginations runs so free,",
            "so now Charlie PLEASE",
            "will you go into the cave?!\"🎶"
        ],
        options: [
            {
                resultingScene: 20,
                text: "You break down and say, \"Alright, FINE! I'll go into the frickin' candy cave."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name: "Do the Thing",
        dialogue: [
            "Pink and Blue: \"Yaaaaaay!\"",
            "Blue Unicorn: \"Goodbye, Charlie!\"",
            "Pink Unicorn: \"Yeah! Goodbye, Charlie!\"" 
        ],
        options: [
            {
                resultingScene: 21,
                text: "Continue"
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name: "The Belly of the Beast",
        dialogue: [
            "You walk into the Candy Mountain cave.",
            "The door suddenly closes itself behind you.",
            "It's pitch black. You can't see a thing.",
            "You feel a pinprick on your rump.",
            "You start to feel incredibly tired.",
            "*FADE TO BLACK*"  
        ],
        options: [
            {
                resultingScene: 22,
                text: "Continue..."
            }
        ],
        endingQuestion: "Continue?"
    },
    {
        name:  "THey Could've at Least Made an Ice Bath",
        dialogue: [
            "You wake up. You're back in the meadow.",
            "The position of the sun tells you that hours have passed.",
            "You feel weak.",
            "You: \"Oh man. What happened?\"",
            "You look down at your lower abdomen, where there's a sharp pain.",
            "You have a new gash there that's been hastily stitched shut.",
            "You: \"Aw, they took my FRICKIN' kidney!"  
        ],
        options: [
            {
                resultingScene: -1,
                text: "Fin"
            }
        ],
        endingQuestion: "THE   END   🍬 🍭 ⛰"
    },
];

let currentScene = 0;

function displayCurrentScene() {
    let thisScene = scenes[currentScene]
    for (line of thisScene.dialogue) {
        console.log(line)
    }
}

function displayCurrentOptions() {
    let thisScene = scenes[currentScene]
    let arrayOptions = thisScene.options
    let textOnlyOptions = arrayOptions.map(x => x.text);
    let userChoice = readlineSync.keyInSelect(textOnlyOptions, thisScene.endingQuestion)
    currentScene = arrayOptions[userChoice].resultingScene
}

while (currentScene >= 0) {
    console.clear()
    displayCurrentScene()
    displayCurrentOptions()
}
