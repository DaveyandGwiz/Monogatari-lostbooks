/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

monogatari.assets('music', {
	'main': 'far-days.mp3',
});


// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'aesop': 'aesop.png',
	'harelaugh':'scene-1.png',
	'race':'race-start.png',
	'hare-fast':'hare-fast.png',
	'hare-sleep':'hare-sleep.png',
	'hare-awake':'hare-awake.png',
	'tort-win':'tort-win.png'

});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
	'a':{
		name: 'Aesop',
		color: '#5bcaff'
	},
	't':{
		name: 'Tortise',
		color: '#00FF00'
	},
	
	'h':{
		name: 'Hare',
		color: '#808080'
	}
	
});

monogatari.script ({
	// The game starts here.
	'Start': [
		function () {
            const bgMusic = document.getElementById('bgMusic');
            if (bgMusic) {
                bgMusic.pause();  // Stop the music
                bgMusic.currentTime = 0;  // Reset the music time if necessary
            }
            return true;  // Continue with the game's script
        },
		'play music main with loop fade 20 volume 10',
		'show scene aesop',
		//'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'a Greetings, {{player.name}}!',
		'a My name is Aesop, I am a teller of fables.',
		'a Perhaps you have heard of me...',		
		{
			'Choice': {
				'Dialog': 'a Would you like to hear the fable of the tortise and the hare?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Fable'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Fable': [
		'play music main with loop fade 20 volume 10',
		//'end'
		'show scene harelaugh',
		'a Once upone a time, a Hare was making fun of a Tortoise one day for being so slow.',
		'h Do you ever get anywhere? he asked with a mocking laugh.',
		't Yes, replied the Tortoise, and I get there sooner than you think. I\'ll run you a race and prove it.',
		'a The Hare was much amused at the idea of running a race with the Tortoise, but for the fun of the thing he agreed.',
		'show scene race',
		'a So the Fox, who had consented to act as judge, marked the distance and started the runners off.',
		'show scene hare-fast',
		'a The Hare was soon far out of sight, ',
		'a And to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare.. ',
		'show scene hare-sleep',
		'a He lay down beside the course to take a nap until the Tortoise should catch up.',
		'a The Tortoise meanwhile kept going slowly...', 
		'a but steadily.', 
		'a And, after a time, passed the place where the Hare was sleeping.', 
		'a But the Hare slept on very peacefully; and when at last he did wake up...', 
		'show scene hare-awake',
		'a The Tortoise was near the goal!', 
		'show scene tort-win',
		'a The Hare now ran his swiftest, but he could not overtake the Tortoise in time.',
		'show scene aesop',
		'a Moral of the story?',
		'a The race is not always to the swift.',
		'end'
	],

	'No': [

		'a Ah, well perhaps another time, then.',
		//'show message Help',
		'a Fare thee well, stranger!',
		'end'
	]
});