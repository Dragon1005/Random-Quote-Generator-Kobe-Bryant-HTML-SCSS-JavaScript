const lists = ["Dedication makes dreams come true.","Once you know what failure feels like, determination chases success.","The most important thing is you must put everybody on notice that you’re here and you are for real.","After all, greatness is not for everybody.", "I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you.", "May you always remember to enjoy the road, especially when it’s a hard one.", "We psych ourselves up too much. Like if you try to talk yourself into, ‘Oh, this is a big moment, this is a big shot,’ you’re putting a lot of pressure on yourself. You shot that shot hundreds and thousands of times. Just shoot another one.", "There's nothing truly to be afraid of, when you think about it, because I've failed before, and I woke up the next morning, and I'm OK.",  "People say bad things about you in the paper on Monday, and then on Wednesday, you're the greatest thing since sliced bread. I've seen that cycle, so why would I be nervous about it happening?", "There's a big misconception where people thinking winning or success comes from everybody putting their arms around each other and singing kumbaya and patting them on the back when they mess up, and that's just not reality. If you are going to be a leader, you are not going to please everybody. You have to hold people accountable. Even if you have that moment of being uncomfortable.", "If you’re afraid to fail, then you’re probably going to fail.",  "The beauty of coaching is growing the players from the ground up. That journey continues.", "Use your success, wealth, and influence to put them in the best position to realize their own dreams and find their true purpose.", "I want to learn how to become the best basketball player in the world. And if I'm going to learn that, I gotta learn from the best. Kids go to school to be doctors or lawyers, so forth and so on and that's where they study. My place to study is from the best.", "A lot of leaders fail because they don’t have the bravery to touch that nerve or strike that chord.", "Trust me, setting things up right from the beginning will avoid a ton of tears and heartache.",  "These young guys are playing checkers. I'm out there playing chess.", "I create my own path. It was straight and narrow. I looked at it this way: you were either in my way or out of it.", "It’s hard for me to grasp the concept of somebody being nervous when I’m talking to them." ];

const btn = document.querySelector('#btn');
const section = document.querySelector('#section');

btn.addEventListener('click', ()=>{
section.textContent = lists[Math.floor(Math.random() * lists.length)];
section.append(btn);
section.style.backgroundColor = 'rgb(85,37,131)';
section.style.color = 'rgb(253,185,39)';
section.style.opacity = '0.8';


section.style.padding = '55px';
btn.style.position = 'absolute';
btn.style.top = '65%'
})



console.log(lists[Math.floor(Math.random() * lists.length)]);