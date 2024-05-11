/* global monogatari */

// script.js
const longText = `
Below are excerpts from the autobiography of Dr. Waldo Wily (2001 - 20XX)

Perhaps it would have been better if we never made our machines.

I should a brief summary of who I am and how we got here. I am Waldo Wily, a leading scientist and as
 the reader I'm sure is aware the former partner of the famous Dr. "Light"

I was working as a professor when I first heard of the new company Light Labs, intially I'll admit I had experieced
some jelousy when I heard of the successful business venture of my former collegue Harry Leight but that 
jealousy turned quickly to excitement when Leght reached out to me to be a partner in his business.
Our business? to design and produce a series of robits that we had long dreamed of as studnets. RRegretably, 
the intiall funding for our program was funded by our work for the government to produce for the miltary
but it was not long before Light labs atood as a private company, mass producing our robtics, 
through the cration of our worker bots, Light Labs qucikly became a household name.

The more our products gained popularity, the lass Leight would accompany me in the lab. and the more often 
I would see him on the feed, giving talks of the next genration of AI.

Light craved the attention, the fame, to have his face seen by the ignorant masses. The fool even had the audacity to change his name to "Light." 
I on the other hand loathed the controversy
and sought to keep our work as much away from generating scruty as possible.

This would would all change however when our labour intensive digman series released. As if over night, 
thousdands of jobs were taken from individuals with our robots putin their place.
The govermnnt quickly increased legislation and went so far as to even put a complete hault on our work.
By that time, I embraced the leave and cut my ties with Light Labs.

The scrutny of our robitcs was wide spread and Leight and myself were villianized often. I acknowleged the 
problems our work presented to mankind, but still new that through it the human species was taking a step in the right direction.

With the aid of our machines the days humans had to spend their days laboring to transport necessities, 
toiling in hot fields fighting wars and laboring long hours under the sun were over. The curse of Adam... Could now
become a thing of the past.
Instead, humanity could instead spend its days... Advancing science, creating art, reflecting our their days. 
With the aid of robitcs, all humanity could live as kings and queens.

`
function returnText() {
	return longText;
}
console.log(longText); // Use the imported text as needed
'use strict';

// // Persistent Storage Variable
// Monogatari.storage ({
// 	wily: { longText:
// 		`Below are excerpts from the autobiography of Dr. Waldo Wily (2001 - 20XX)
// 		Perhaps it would have been better if we never made our machines.

// 		I should a brief summary of who I am and how we got here. I am Waldo Wily, a leading scientist and as
// 		the reader I'm sure is aware the former partner of the famous Dr. "Light"

// 		I was working as a professor when I first heard of the new company Light Labs, intially I'll admit I had experieced
// 		some jelousy when I heard of the successful business venture of my former collegue Harry Leight but that 
// 		jealousy turned quickly to excitement when Leght reached out to me to be a partner in his business.
// 		Our business? to design and produce a series of robits that we had long dreamed of as studnets. RRegretably, 
// 		the intiall funding for our program was funded by our work for the government to produce for the miltary
// 		but it was not long before Light labs atood as a private company, mass producing our robtics, 
// 		through the cration of our worker bots, Light Labs qucikly became a household name.

// 		The more our products gained popularity, the lass Leight would accompany me in the lab. and the more often 
// 		I would see him on the feed, giving talks of the next genration of AI.

// 		Light craved the attention, the fame, to have his face seen by the ignorant masses. The fool even had the audacity to change his name to "Light." 
// 		I on the other hand loathed the controversy
// 		and sought to keep our work as much away from generating scruty as possible.

// 		This would would all change however when our labour intensive digman series released. As if over night, 
// 		thousdands of jobs were taken from individuals with our robots putin their place.
// 		The govermnnt quickly increased legislation and went so far as to even put a complete hault on our work.
// 		By that time, I embraced the leave and cut my ties with Light Labs.

// 		The scrutny of our robitcs was wide spread and Leight and myself were villianized often. I acknowleged the 
// 		problems our work presented to mankind, but still new that through it the human species was taking a step in the right direction.

// 		With the aid of our machines the days humans had to spend their days laboring to transport necessities, 
// 		toiling in hot fields fighting wars and laboring long hours under the sun were over. The curse of Adam... Could now
// 		become a thing of the past.
// 		Instead, humanity could instead spend its days... Advancing science, creating art, reflecting our their days. 
// 	With the aid of robitcs, all humanity could live as kings and queens.`
// 	}

// });
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

// Define the music used in the game.
monogatari.assets ('music', {

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

});

const pi = 3.14;
// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	}
});

monogatari.script (
	{

	'Start': [
//        'show scene #000000 with fadeIn',
		'show scene #f7f6f6 with fadeIn',
		'centered <span class="scrolling"> {{wily.longText}}',
		{
			'Choice': {
				'Dialog': 'Select Act',
				'Act 3': {
					'Text': 'Act 3',
                    'Do': 'jump Act3'
				},
				'Maybe': {
					'Text': 'not sure....',
					'Do': 'jump Maybe'
				},
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],
	'Go': [
		'well, it looks like snoop doggy dog needs to get a jobby job',
		'jump end'
	],
	'Maybe': [
		'well, it looks like snoop doggy dog needs to get a jobby job',
		'jump Choice'
	],
	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],
	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});