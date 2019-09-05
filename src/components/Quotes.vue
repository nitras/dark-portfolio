<template>
  <div>
    <transition name="slide-fade">
      <blockquote>
        <cite>{{QuoteText}}</cite>
        <p class="passage">{{PassageText}}</p>
      </blockquote>
    </transition>
  </div>
</template>



<script>
var r = 0;
export default {
  beforeMount() {
    this.randomQuote();
  },

  methods: {
    randomQuote: function() {
      var r = 0;
      var lastclear = localStorage.getItem("lastclear"),
        time_now = new Date().getTime();

      // .getTime() returns milliseconds so 1000 * 60 * 60 * 24 = 24 days
      if (time_now - lastclear > 1000 * 60 * 60 * 24) {
        localStorage.clear();
        localStorage.setItem("lastclear", time_now);
      }
      r = this.randomNumber();
      this.QuoteText = this.quotes[r].quote;
      this.PassageText = this.quotes[r].passage;
    },

    randomNumber: function() {
      this.shuffle(this.quotes);
      return Math.floor(Math.random() * this.quotes.length);
    },
    shuffle: function(sourceArray) {
      for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
      }
      return sourceArray;
    }
  },

  data() {
    return {
      QuoteText: "",
      PassageText: "",
      quotes: [
        {
          passage: "Psalm 41:9",
          quote:
            "Even my close friend in whom I trusted, who ate my bread, has lifted his heel against me."
        },
        {
          passage: "Mark 14:43-45",
          quote:
            "And immediately, while he was still speaking, Judas came, one of the twelve, and with him a crowd with swords and clubs, from the chief priests and the scribes and the elders. Now the betrayer had given them a sign, saying, “The one I will kiss is the man. Seize him and lead him away under guard.” And when he came, he went up to him at once and said, “Rabbi!” And he kissed him."
        },
        {
          passage: "Matthew 27:5",
          quote:
            "And throwing down the pieces of silver into the temple, he departed, and he went and hanged himself."
        },
        {
          passage: "Matthew 27:3-10",
          quote:
            "Then when Judas, his betrayer, saw that Jesus was condemned, he changed his mind and brought back the thirty pieces of silver to the chief priests and the elders, saying, “I have sinned by betraying innocent blood.” They said, “What is that to us? See to it yourself.” And throwing down the pieces of silver into the temple, he departed, and he went and hanged himself. But the chief priests, taking the pieces of silver, said, “It is not lawful to put them into the treasury, since it is blood money.” So they took counsel and bought with them the potter's field as a burial place for strangers. ..."
        },
        {
          passage: "John 12:4-6",
          quote:
            "But Judas Iscariot, one of his disciples (he who was about to betray him), said, “Why was this ointment not sold for three hundred denarii and given to the poor?” He said this, not because he cared about the poor, but because he was a thief, and having charge of the moneybag he used to help himself to what was put into it."
        },
        {
          passage: "John 13:2",
          quote:
            "During supper, when the devil had already put it into the heart of Judas Iscariot, Simon's son, to betray him,"
        },
        {
          passage: "John 6:67-71",
          quote:
            "So Jesus said to the Twelve, “Do you want to go away as well?” Simon Peter answered him, “Lord, to whom shall we go? You have the words of eternal life, and we have believed, and have come to know, that you are the Holy One of God.” Jesus answered them, “Did I not choose you, the Twelve? And yet one of you is a devil.” He spoke of Judas the son of Simon Iscariot, for he, one of the Twelve, was going to betray him."
        },
        {
          passage: "Acts 1:16-25",
          quote:
            "“Brothers, the Scripture had to be fulfilled, which the Holy Spirit spoke beforehand by the mouth of David concerning Judas, who became a guide to those who arrested Jesus. For he was numbered among us and was allotted his share in this ministry.” (Now this man acquired a field with the reward of his wickedness, and falling headlong he burst open in the middle and all his bowels gushed out. And it became known to all the inhabitants of Jerusalem, so that the field was called in their own language Akeldama, that is, Field of Blood.) “For it is written in the Book of Psalms, “‘May his camp become desolate, and let there be no one to dwell in it’; and “‘Let another take his office.’ ..."
        },
        {
          passage: "John 12:6",
          quote:
            "He said this, not because he cared about the poor, but because he was a thief, and having charge of the moneybag he used to help himself to what was put into it."
        },
        {
          passage: "Luke 22:3-6",
          quote:
            "Then Satan entered into Judas called Iscariot, who was of the number of the twelve. He went away and conferred with the chief priests and officers how he might betray him to them. And they were glad, and agreed to give him money. So he consented and sought an opportunity to betray him to them in the absence of a crowd."
        },
        {
          passage: "John 17:12",
          quote:
            "While I was with them, I kept them in your name, which you have given me. I have guarded them, and not one of them has been lost except the son of destruction, that the Scripture might be fulfilled."
        },
        {
          passage: "Matthew 26:14-16",
          quote:
            "Then one of the twelve, whose name was Judas Iscariot, went to the chief priests and said, “What will you give me if I deliver him over to you?” And they paid him thirty pieces of silver. And from that moment he sought an opportunity to betray him."
        },
        {
          passage: "Acts 1:18",
          quote:
            "Now this man acquired a field with the reward of his wickedness, and falling headlong he burst open in the middle and all his bowels gushed out."
        },
        {
          passage: "Acts 1:16",
          quote:
            "“Brothers, the Scripture had to be fulfilled, which the Holy Spirit spoke beforehand by the mouth of David concerning Judas, who became a guide to those who arrested Jesus."
        },
        {
          passage: "John 13:18-26",
          quote:
            "I am not speaking of all of you; I know whom I have chosen. But the Scripture will be fulfilled, ‘He who ate my bread has lifted his heel against me.’ I am telling you this now, before it takes place, that when it does take place you may believe that I am he. Truly, truly, I say to you, whoever receives the one I send receives me, and whoever receives me receives the one who sent me.” After saying these things, Jesus was troubled in his spirit, and testified, “Truly, truly, I say to you, one of you will betray me.” The disciples looked at one another, uncertain of whom he spoke. ..."
        },
        {
          passage: "Luke 6:16",
          quote:
            "And Judas the son of James, and Judas Iscariot, who became a traitor."
        },
        {
          passage: "Mark 14:18-21",
          quote:
            "And as they were reclining at table and eating, Jesus said, “Truly, I say to you, one of you will betray me, one who is eating with me.” They began to be sorrowful and to say to him one after another, “Is it I?” He said to them, “It is one of the twelve, one who is dipping bread into the dish with me. For the Son of Man goes as it is written of him, but woe to that man by whom the Son of Man is betrayed! It would have been better for that man if he had not been born.”"
        },
        {
          passage: "Matthew 27:3-5",
          quote:
            "Then when Judas, his betrayer, saw that Jesus was condemned, he changed his mind and brought back the thirty pieces of silver to the chief priests and the elders, saying, “I have sinned by betraying innocent blood.” They said, “What is that to us? See to it yourself.” And throwing down the pieces of silver into the temple, he departed, and he went and hanged himself."
        },
        {
          passage: "Matthew 26:47-50",
          quote:
            "While he was still speaking, Judas came, one of the twelve, and with him a great crowd with swords and clubs, from the chief priests and the elders of the people. Now the betrayer had given them a sign, saying, “The one I will kiss is the man; seize him.” And he came up to Jesus at once and said, “Greetings, Rabbi!” And he kissed him. Jesus said to him, “Friend, do what you came to do.” Then they came up and laid hands on Jesus and seized him."
        },
        {
          passage: "John 13:27",
          quote:
            "Then after he had taken the morsel, Satan entered into him. Jesus said to him, “What you are going to do, do quickly.”"
        },
        {
          passage: "Matthew 10:4",
          quote: "Simon the Cananaean, and Judas Iscariot, who betrayed him."
        },
        {
          passage: "John 18:2-5",
          quote:
            "Now Judas, who betrayed him, also knew the place, for Jesus often met there with his disciples. So Judas, having procured a band of soldiers and some officers from the chief priests and the Pharisees, went there with lanterns and torches and weapons. Then Jesus, knowing all that would happen to him, came forward and said to them, “Whom do you seek?” They answered him, “Jesus of Nazareth.” Jesus said to them, “I am he.” Judas, who betrayed him, was standing with them."
        },
        {
          passage: "John 6:70",
          quote:
            "Jesus answered them, “Did I not choose you, the Twelve? And yet one of you is a devil.”"
        },
        {
          passage: "Mark 14:11",
          quote:
            "And when they heard it, they were glad and promised to give him money. And he sought an opportunity to betray him."
        },
        {
          passage: "Mark 3:19",
          quote: "And Judas Iscariot, who betrayed him."
        },
        {
          passage: "Zechariah 11:12",
          quote:
            "Then I said to them, “If it seems good to you, give me my wages; but if not, keep them.” And they weighed out as my wages thirty pieces of silver."
        },
        {
          passage: "John 13:18",
          quote:
            "I am not speaking of all of you; I know whom I have chosen. But the Scripture will be fulfilled, ‘He who ate my bread has lifted his heel against me.’"
        },
        {
          passage: "Matthew 26:21-25",
          quote:
            "And as they were eating, he said, “Truly, I say to you, one of you will betray me.” And they were very sorrowful and began to say to him one after another, “Is it I, Lord?” He answered, “He who has dipped his hand in the dish with me will betray me. The Son of Man goes as it is written of him, but woe to that man by whom the Son of Man is betrayed! It would have been better for that man if he had not been born.” Judas, who would betray him, answered, “Is it I, Rabbi?” He said to him, “You have said so.”"
        },
        {
          passage: "John 13:29",
          quote:
            "Some thought that, because Judas had the moneybag, Jesus was telling him, “Buy what we need for the feast,” or that he should give something to the poor."
        },
        {
          passage: "Luke 22:21-23",
          quote:
            "But behold, the hand of him who betrays me is with me on the table. For the Son of Man goes as it has been determined, but woe to that man by whom he is betrayed!” And they began to question one another, which of them it could be who was going to do this."
        },
        {
          passage: "Mark 14:10",
          quote:
            "Then Judas Iscariot, who was one of the twelve, went to the chief priests in order to betray him to them."
        },
        {
          passage: "Matthew 27:3-10",
          quote:
            "Then when Judas, his betrayer, saw that Jesus was condemned, he changed his mind and brought back the thirty pieces of silver to the chief priests and the elders, saying, “I have sinned by betraying innocent blood.” They said, “What is that to us? See to it yourself.” And throwing down the pieces of silver into the temple, he departed, and he went and hanged himself. But the chief priests, taking the pieces of silver, said, “It is not lawful to put them into the treasury, since it is blood money.” So they took counsel and bought with them the potter's field as a burial place for strangers. ..."
        },
        {
          passage: "John 12:4-6",
          quote:
            "But Judas Iscariot, one of his disciples (he who was about to betray him), said, “Why was this ointment not sold for three hundred denarii and given to the poor?” He said this, not because he cared about the poor, but because he was a thief, and having charge of the moneybag he used to help himself to what was put into it."
        },
        {
          passage: "John 13:2",
          quote:
            "During supper, when the devil had already put it into the heart of Judas Iscariot, Simon's son, to betray him,"
        },
        {
          passage: "John 6:67-71",
          quote:
            "So Jesus said to the Twelve, “Do you want to go away as well?” Simon Peter answered him, “Lord, to whom shall we go? You have the words of eternal life, and we have believed, and have come to know, that you are the Holy One of God.” Jesus answered them, “Did I not choose you, the Twelve? And yet one of you is a devil.” He spoke of Judas the son of Simon Iscariot, for he, one of the Twelve, was going to betray him."
        },
        {
          passage: "Acts 1:16-25",
          quote:
            "“Brothers, the Scripture had to be fulfilled, which the Holy Spirit spoke beforehand by the mouth of David concerning Judas, who became a guide to those who arrested Jesus. For he was numbered among us and was allotted his share in this ministry.” (Now this man acquired a field with the reward of his wickedness, and falling headlong he burst open in the middle and all his bowels gushed out. And it became known to all the inhabitants of Jerusalem, so that the field was called in their own language Akeldama, that is, Field of Blood.) “For it is written in the Book of Psalms, “‘May his camp become desolate, and let there be no one to dwell in it’; and “‘Let another take his office.’ ..."
        },
        {
          passage: "John 12:6",
          quote:
            "He said this, not because he cared about the poor, but because he was a thief, and having charge of the moneybag he used to help himself to what was put into it."
        },
        {
          passage: "Luke 22:3-6",
          quote:
            "Then Satan entered into Judas called Iscariot, who was of the number of the twelve. He went away and conferred with the chief priests and officers how he might betray him to them. And they were glad, and agreed to give him money. So he consented and sought an opportunity to betray him to them in the absence of a crowd."
        },
        {
          passage: "John 17:12",
          quote:
            "While I was with them, I kept them in your name, which you have given me. I have guarded them, and not one of them has been lost except the son of destruction, that the Scripture might be fulfilled."
        },
        {
          passage: "Matthew 26:14-16",
          quote:
            "Then one of the twelve, whose name was Judas Iscariot, went to the chief priests and said, “What will you give me if I deliver him over to you?” And they paid him thirty pieces of silver. And from that moment he sought an opportunity to betray him."
        },
        {
          passage: "Acts 1:18",
          quote:
            "Now this man acquired a field with the reward of his wickedness, and falling headlong he burst open in the middle and all his bowels gushed out."
        },
        {
          passage: "Acts 1:16",
          quote:
            "“Brothers, the Scripture had to be fulfilled, which the Holy Spirit spoke beforehand by the mouth of David concerning Judas, who became a guide to those who arrested Jesus."
        },
        {
          passage: "John 13:18-26",
          quote:
            "I am not speaking of all of you; I know whom I have chosen. But the Scripture will be fulfilled, ‘He who ate my bread has lifted his heel against me.’ I am telling you this now, before it takes place, that when it does take place you may believe that I am he. Truly, truly, I say to you, whoever receives the one I send receives me, and whoever receives me receives the one who sent me.” After saying these things, Jesus was troubled in his spirit, and testified, “Truly, truly, I say to you, one of you will betray me.” The disciples looked at one another, uncertain of whom he spoke. ..."
        },
        {
          passage: "Luke 6:16",
          quote:
            "And Judas the son of James, and Judas Iscariot, who became a traitor."
        },
        {
          passage: "Mark 14:18-21",
          quote:
            "And as they were reclining at table and eating, Jesus said, “Truly, I say to you, one of you will betray me, one who is eating with me.” They began to be sorrowful and to say to him one after another, “Is it I?” He said to them, “It is one of the twelve, one who is dipping bread into the dish with me. For the Son of Man goes as it is written of him, but woe to that man by whom the Son of Man is betrayed! It would have been better for that man if he had not been born.”"
        },
        {
          passage: "Matthew 27:3-5",
          quote:
            "Then when Judas, his betrayer, saw that Jesus was condemned, he changed his mind and brought back the thirty pieces of silver to the chief priests and the elders, saying, “I have sinned by betraying innocent blood.” They said, “What is that to us? See to it yourself.” And throwing down the pieces of silver into the temple, he departed, and he went and hanged himself."
        },
        {
          passage: "Matthew 26:47-50",
          quote:
            "While he was still speaking, Judas came, one of the twelve, and with him a great crowd with swords and clubs, from the chief priests and the elders of the people. Now the betrayer had given them a sign, saying, “The one I will kiss is the man; seize him.” And he came up to Jesus at once and said, “Greetings, Rabbi!” And he kissed him. Jesus said to him, “Friend, do what you came to do.” Then they came up and laid hands on Jesus and seized him."
        },
        {
          passage: "John 13:27",
          quote:
            "Then after he had taken the morsel, Satan entered into him. Jesus said to him, “What you are going to do, do quickly.”"
        },
        {
          passage: "Matthew 10:4",
          quote: "Simon the Cananaean, and Judas Iscariot, who betrayed him."
        },
        {
          passage: "John 18:2-5",
          quote:
            "Now Judas, who betrayed him, also knew the place, for Jesus often met there with his disciples. So Judas, having procured a band of soldiers and some officers from the chief priests and the Pharisees, went there with lanterns and torches and weapons. Then Jesus, knowing all that would happen to him, came forward and said to them, “Whom do you seek?” They answered him, “Jesus of Nazareth.” Jesus said to them, “I am he.” Judas, who betrayed him, was standing with them."
        },
        {
          passage: "John 6:70",
          quote:
            "Jesus answered them, “Did I not choose you, the Twelve? And yet one of you is a devil.”"
        },
        {
          passage: "Mark 14:11",
          quote:
            "And when they heard it, they were glad and promised to give him money. And he sought an opportunity to betray him."
        },
        {
          passage: "Mark 3:19",
          quote: "And Judas Iscariot, who betrayed him."
        },
        {
          passage: "Zechariah 11:12",
          quote:
            "Then I said to them, “If it seems good to you, give me my wages; but if not, keep them.” And they weighed out as my wages thirty pieces of silver."
        },
        {
          passage: "John 13:18",
          quote:
            "I am not speaking of all of you; I know whom I have chosen. But the Scripture will be fulfilled, ‘He who ate my bread has lifted his heel against me.’"
        },
        {
          passage: "Matthew 26:21-25",
          quote:
            "And as they were eating, he said, “Truly, I say to you, one of you will betray me.” And they were very sorrowful and began to say to him one after another, “Is it I, Lord?” He answered, “He who has dipped his hand in the dish with me will betray me. The Son of Man goes as it is written of him, but woe to that man by whom the Son of Man is betrayed! It would have been better for that man if he had not been born.” Judas, who would betray him, answered, “Is it I, Rabbi?” He said to him, “You have said so.”"
        },
        {
          passage: "John 13:29",
          quote:
            "Some thought that, because Judas had the moneybag, Jesus was telling him, “Buy what we need for the feast,” or that he should give something to the poor."
        },
        {
          passage: "Luke 22:21-23",
          quote:
            "But behold, the hand of him who betrays me is with me on the table. For the Son of Man goes as it has been determined, but woe to that man by whom he is betrayed!” And they began to question one another, which of them it could be who was going to do this."
        },
        {
          passage: "Mark 14:10",
          quote:
            "Then Judas Iscariot, who was one of the twelve, went to the chief priests in order to betray him to them."
        },
        {
          passage: "Acts 1:20",
          quote:
            "“For it is written in the Book of Psalms, “‘May his camp become desolate, and let there be no one to dwell in it’; and “‘Let another take his office.’"
        },
        {
          passage: "Zechariah 11:13",
          quote:
            "Then the Lord said to me, “Throw it to the potter”—the lordly price at which I was priced by them. So I took the thirty pieces of silver and threw them into the house of the Lord, to the potter."
        },
        {
          passage: "Acts 1:17",
          quote:
            "For he was numbered among us and was allotted his share in this ministry.”"
        },
        {
          passage: "Luke 22:47-49",
          quote:
            "While he was still speaking, there came a crowd, and the man called Judas, one of the twelve, was leading them. He drew near to Jesus to kiss him, but Jesus said to him, “Judas, would you betray the Son of Man with a kiss?” And when those who were around him saw what would follow, they said, “Lord, shall we strike with the sword?”"
        },
        {
          passage: "Luke 22:48",
          quote:
            "But Jesus said to him, “Judas, would you betray the Son of Man with a kiss?”"
        },
        {
          passage: "Psalm 109:8",
          quote: "May his days be few; may another take his office!"
        },
        {
          passage: "Matthew 26:24",
          quote:
            "The Son of Man goes as it is written of him, but woe to that man by whom the Son of Man is betrayed! It would have been better for that man if he had not been born.”"
        },
        {
          passage: "John 14:22",
          quote:
            "Judas (not Iscariot) said to him, “Lord, how is it that you will manifest yourself to us, and not to the world?”"
        },
        {
          passage: "Acts 1:17-20",
          quote:
            "For he was numbered among us and was allotted his share in this ministry.” (Now this man acquired a field with the reward of his wickedness, and falling headlong he burst open in the middle and all his bowels gushed out. And it became known to all the inhabitants of Jerusalem, so that the field was called in their own language Akeldama, that is, Field of Blood.) “For it is written in the Book of Psalms, “‘May his camp become desolate, and let there be no one to dwell in it’; and “‘Let another take his office.’"
        },
        {
          passage: "Matthew 26:14",
          quote:
            "Then one of the twelve, whose name was Judas Iscariot, went to the chief priests"
        },
        {
          passage: "Acts 1:25",
          quote:
            "To take the place in this ministry and apostleship from which Judas turned aside to go to his own place.”"
        },
        {
          passage: "John 13:26",
          quote:
            "Jesus answered, “It is he to whom I will give this morsel of bread when I have dipped it.” So when he had dipped the morsel, he gave it to Judas, the son of Simon Iscariot."
        },
        {
          passage: "John 12:4",
          quote:
            "But Judas Iscariot, one of his disciples (he who was about to betray him), said,"
        },
        {
          passage: "Luke 22:47",
          quote:
            "While he was still speaking, there came a crowd, and the man called Judas, one of the twelve, was leading them. He drew near to Jesus to kiss him,"
        },
        {
          passage: "Matthew 27:3",
          quote:
            "Then when Judas, his betrayer, saw that Jesus was condemned, he changed his mind and brought back the thirty pieces of silver to the chief priests and the elders,"
        },
        {
          passage: "Matthew 13:55",
          quote:
            "Is not this the carpenter's son? Is not his mother called Mary? And are not his brothers James and Joseph and Simon and Judas?"
        },
        {
          passage: "Acts 1:13",
          quote:
            "And when they had entered, they went up to the upper room, where they were staying, Peter and John and James and Andrew, Philip and Thomas, Bartholomew and Matthew, James the son of Alphaeus and Simon the Zealot and Judas the son of James."
        },
        {
          passage: "John 3:16",
          quote:
            "“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."
        },
        {
          passage: "John 6:71",
          quote:
            "He spoke of Judas the son of Simon Iscariot, for he, one of the Twelve, was going to betray him."
        },
        {
          passage: "Mark 14:43",
          quote:
            "And immediately, while he was still speaking, Judas came, one of the twelve, and with him a crowd with swords and clubs, from the chief priests and the scribes and the elders."
        },
        {
          passage: "Mark 14:10-11",
          quote:
            "Then Judas Iscariot, who was one of the twelve, went to the chief priests in order to betray him to them. And when they heard it, they were glad and promised to give him money. And he sought an opportunity to betray him."
        },
        {
          passage: "Matthew 26:47",
          quote:
            "While he was still speaking, Judas came, one of the twelve, and with him a great crowd with swords and clubs, from the chief priests and the elders of the people."
        },
        {
          passage: "Matthew 26:25",
          quote:
            "Judas, who would betray him, answered, “Is it I, Rabbi?” He said to him, “You have said so.”"
        },
        {
          passage: "Matthew 26:16",
          quote: "And from that moment he sought an opportunity to betray him."
        },
        {
          passage: "Acts 9:11",
          quote:
            "And the Lord said to him, “Rise and go to the street called Straight, and at the house of Judas look for a man of Tarsus named Saul, for behold, he is praying,"
        },
        {
          passage: "John 13:21",
          quote:
            "After saying these things, Jesus was troubled in his spirit, and testified, “Truly, truly, I say to you, one of you will betray me.”"
        },
        {
          passage: "Acts 15:22",
          quote:
            "Then it seemed good to the apostles and the elders, with the whole church, to choose men from among them and send them to Antioch with Paul and Barnabas. They sent Judas called Barsabbas, and Silas, leading men among the brothers,"
        },
        {
          passage: "Acts 5:37",
          quote:
            "After him Judas the Galilean rose up in the days of the census and drew away some of the people after him. He too perished, and all who followed him were scattered."
        },
        {
          passage: "John 18:5",
          quote:
            "They answered him, “Jesus of Nazareth.” Jesus said to them, “I am he.” Judas, who betrayed him, was standing with them."
        },
        {
          passage: "John 18:2",
          quote:
            "Now Judas, who betrayed him, also knew the place, for Jesus often met there with his disciples."
        },
        {
          passage: "Luke 22:49",
          quote:
            "And when those who were around him saw what would follow, they said, “Lord, shall we strike with the sword?”"
        },
        {
          passage: "Luke 22:6",
          quote:
            "So he consented and sought an opportunity to betray him to them in the absence of a crowd."
        },
        {
          passage: "Mark 14:44",
          quote:
            "Now the betrayer had given them a sign, saying, “The one I will kiss is the man. Seize him and lead him away under guard.”"
        },
        {
          passage: "Mark 14:21",
          quote:
            "For the Son of Man goes as it is written of him, but woe to that man by whom the Son of Man is betrayed! It would have been better for that man if he had not been born.”"
        },
        {
          passage: "Mark 6:3",
          quote:
            "Is not this the carpenter, the son of Mary and brother of James and Joses and Judas and Simon? And are not his sisters here with us?” And they took offense at him."
        },
        {
          passage: "Matthew 27:6",
          quote:
            "But the chief priests, taking the pieces of silver, said, “It is not lawful to put them into the treasury, since it is blood money.”"
        },
        {
          passage: "Matthew 27:4",
          quote:
            "Saying, “I have sinned by betraying innocent blood.” They said, “What is that to us? See to it yourself.”"
        },
        {
          passage: "Matthew 26:23",
          quote:
            "He answered, “He who has dipped his hand in the dish with me will betray me."
        },
        {
          passage: "Matthew 26:15",
          quote:
            "And said, “What will you give me if I deliver him over to you?” And they paid him thirty pieces of silver."
        },
        {
          passage: "Matthew 10:1",
          quote:
            "And he called to him his twelve disciples and gave them authority over unclean spirits, to cast them out, and to heal every disease and every affliction."
        },
        {
          passage: "Genesis 50:20",
          quote:
            "As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive, as they are today."
        },
        {
          passage: "Acts 1:18-19",
          quote:
            "(Now this man acquired a field with the reward of his wickedness, and falling headlong he burst open in the middle and all his bowels gushed out. And it became known to all the inhabitants of Jerusalem, so that the field was called in their own language Akeldama, that is, Field of Blood.)"
        },
        {
          passage: "John 13:10-11",
          quote:
            "Jesus said to him, “The one who has bathed does not need to wash, except for his feet, but is completely clean. And you are clean, but not every one of you.” For he knew who was to betray him; that was why he said, “Not all of you are clean.”"
        },
        {
          passage: "John 6:70-71",
          quote:
            "Jesus answered them, “Did I not choose you, the Twelve? And yet one of you is a devil.” He spoke of Judas the son of Simon Iscariot, for he, one of the Twelve, was going to betray him."
        },
        {
          passage: "Luke 22:22",
          quote:
            "For the Son of Man goes as it has been determined, but woe to that man by whom he is betrayed!”"
        },
        {
          passage: "Luke 22:21",
          quote:
            "But behold, the hand of him who betrays me is with me on the table."
        },
        {
          passage: "Luke 22:3",
          quote:
            "Then Satan entered into Judas called Iscariot, who was of the number of the twelve."
        },
        {
          passage: "Luke 6:12-16",
          quote:
            "In these days he went out to the mountain to pray, and all night he continued in prayer to God. And when day came, he called his disciples and chose from them twelve, whom he named apostles: Simon, whom he named Peter, and Andrew his brother, and James and John, and Philip, and Bartholomew, and Matthew, and Thomas, and James the son of Alphaeus, and Simon who was called the Zealot, and Judas the son of James, and Judas Iscariot, who became a traitor."
        },
        {
          passage: "Mark 14:18",
          quote:
            "And as they were reclining at table and eating, Jesus said, “Truly, I say to you, one of you will betray me, one who is eating with me.”"
        },
        {
          passage: "Matthew 26:21",
          quote:
            "And as they were eating, he said, “Truly, I say to you, one of you will betray me.”"
        },
        {
          passage: "Matthew 24:24-25",
          quote:
            "For false christs and false prophets will arise and perform great signs and wonders, so as to lead astray, if possible, even the elect. See, I have told you beforehand."
        },
        {
          passage: "Revelation 1:1-20",
          quote:
            "The revelation of Jesus Christ, which God gave him to show to his servants the things that must soon take place. He made it known by sending his angel to his servant John, who bore witness to the word of God and to the testimony of Jesus Christ, even to all that he saw. Blessed is the one who reads aloud the words of this prophecy, and blessed are those who hear, and who keep what is written in it, for the time is near. John to the seven churches that are in Asia: Grace to you and peace from him who is and who was and who is to come, and from the seven spirits who are before his throne, and from Jesus Christ the faithful witness, the firstborn of the dead, and the ruler of kings on earth. To him who loves us and has freed us from our sins by his blood ..."
        },
        {
          passage: "2 Timothy 3:4",
          quote:
            "Treacherous, reckless, swollen with conceit, lovers of pleasure rather than lovers of God,"
        },
        {
          passage: "Colossians 4:1-18",
          quote:
            "Masters, treat your slaves justly and fairly, knowing that you also have a Master in heaven. Continue steadfastly in prayer, being watchful in it with thanksgiving. At the same time, pray also for us, that God may open to us a door for the word, to declare the mystery of Christ, on account of which I am in prison— that I may make it clear, which is how I ought to speak. Walk in wisdom toward outsiders, making the best use of the time. ..."
        },
        {
          passage: "Colossians 3:1-25",
          quote:
            "If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God. Set your minds on things that are above, not on things that are on earth. For you have died, and your life is hidden with Christ in God. When Christ who is your life appears, then you also will appear with him in glory. Put to death therefore what is earthly in you: sexual immorality, impurity, passion, evil desire, and covetousness, which is idolatry. ..."
        },
        {
          passage: "Colossians 2:1-23",
          quote:
            "For I want you to know how great a struggle I have for you and for those at Laodicea and for all who have not seen me face to face, that their hearts may be encouraged, being knit together in love, to reach all the riches of full assurance of understanding and the knowledge of God's mystery, which is Christ, in whom are hidden all the treasures of wisdom and knowledge. I say this in order that no one may delude you with plausible arguments. For though I am absent in body, yet I am with you in spirit, rejoicing to see your good order and the firmness of your faith in Christ. ..."
        },
        {
          passage: "Colossians 1:1-29",
          quote:
            "Paul, an apostle of Christ Jesus by the will of God, and Timothy our brother, To the saints and faithful brothers in Christ at Colossae: Grace to you and peace from God our Father. We always thank God, the Father of our Lord Jesus Christ, when we pray for you, since we heard of your faith in Christ Jesus and of the love that you have for all the saints, because of the hope laid up for you in heaven. Of this you have heard before in the word of the truth, the gospel, ..."
        },
        {
          passage: "Acts 17:10-11",
          quote:
            "The brothers immediately sent Paul and Silas away by night to Berea, and when they arrived they went into the Jewish synagogue. Now these Jews were more noble than those in Thessalonica; they received the word with all eagerness, examining the Scriptures daily to see if these things were so."
        },
        {
          passage: "Acts 15:32",
          quote:
            "And Judas and Silas, who were themselves prophets, encouraged and strengthened the brothers with many words."
        },
        {
          passage: "Acts 15:27",
          quote:
            "We have therefore sent Judas and Silas, who themselves will tell you the same things by word of mouth."
        },
        {
          passage: "Acts 1:19",
          quote:
            "And it became known to all the inhabitants of Jerusalem, so that the field was called in their own language Akeldama, that is, Field of Blood.)"
        },
        {
          passage: "Acts 1:16-18",
          quote:
            "“Brothers, the Scripture had to be fulfilled, which the Holy Spirit spoke beforehand by the mouth of David concerning Judas, who became a guide to those who arrested Jesus. For he was numbered among us and was allotted his share in this ministry.” (Now this man acquired a field with the reward of his wickedness, and falling headlong he burst open in the middle and all his bowels gushed out."
        },
        {
          passage: "John 18:3",
          quote:
            "So Judas, having procured a band of soldiers and some officers from the chief priests and the Pharisees, went there with lanterns and torches and weapons."
        },
        {
          passage: "John 14:27",
          quote:
            "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid."
        },
        {
          passage: "John 14:6",
          quote:
            "Jesus said to him, “I am the way, and the truth, and the life. No one comes to the Father except through me."
        },
        {
          passage: "Mark 14:20",
          quote:
            "He said to them, “It is one of the twelve, one who is dipping bread into the dish with me."
        },
        {
          passage: "Acts 26:18",
          quote:
            "To open their eyes, so that they may turn from darkness to light and from the power of Satan to God, that they may receive forgiveness of sins and a place among those who are sanctified by faith in me.’"
        },
        {
          passage: "Acts 1:23",
          quote:
            "And they put forward two, Joseph called Barsabbas, who was also called Justus, and Matthias."
        },
        {
          passage: "Acts 1:21",
          quote:
            "So one of the men who have accompanied us during all the time that the Lord Jesus went in and out among us."
        }
      ]
    };
  }
};
</script>

<style>
cite {
  font-size: 5rem;
  text-transform: none;
  font-style: normal;
}
/*
cite:before {
  content: "“";
  content: open-quote;
}
cite:after {
  content: "”";
  content: close-quote;
}
*/
.passage:before {
  border-bottom: 1.5px solid transparent;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>