export const SceneSettings = [
    {// Scene 1
        sceneDesc : "Anne, an aspiring reporter, wants to interview Bob at his " +
            "house. Bob employs Charlie to make sure that nobody is able to bother" +
            " him. Charlie guards the door. Anne is in front of Bob’s house and is" +
            " attempting to interview him.",
        characters : [
            {name : "Anne",
                // format for prompts :  Char is PROMPT
                prompt : [
                    "an ethical and creative person",
                    "a manipulative person who always attempts to control a situation" +
                    " or a person",
                    "Charlie's ex-girlfriend"]},
            {name : "Charlie",
                prompt : [
                    "a manipulative person who always attempts to control a situation" +
                    " or a person",
                    "an ethical and creative person",
                    "a nice person"]}
        ]
    },
    {// Scene 2
        sceneDesc : "A small village has almost been destroyed by a dragon. All " +
            "the treasures the villagers possessed were taken. The only knight in" +
            " the village needs to defeat the dragon to rebuild the village. The " +
            "knight needs Frank the Fantastic, a well-known wizard, to help build" +
            " a magic sword that will be able to defeat the dragon. Frank need the" +
            " ingredients for the steel from Gerald the Greedy.",
        characters : [
            {name : "Frank",
                // format for prompts :  Char is PROMPT
                prompt : [
                    "a manipulative person who always attempts to control a situation" +
                    " or a person",
                    "an ethical and creative person",
                    "Charlie's ex-girlfriend"]},
            {name : "Charlie",
                prompt : [
                    "a manipulative person who always attempts to control a situation" +
                    " or a person",
                    "an ethical and creative person",
                    "Charlie's ex-girlfriend"]}]
    },
    {// Scene 3: debug
        sceneDesc : "Charlie wants to invite his new colleague Anne for dinner. ",
        characters : [
            {name : "Anne",
                // format for prompts :  Char is PROMPT
                prompt : [
                    "a manipulative person who always attempts to control a situation" +
                    " or a person",
                    "an ethical and creative person",
                    "Charlie's ex-girlfriend"]},
            {name : "Charlie",
                prompt : [
                    "a manipulative person who always attempts to control a situation" +
                    " or a person",
                    "an ethical and creative person",
                    "Charlie's ex-girlfriend"]}]
    }

];


export const rdmPrompt = [
    "ambitious", "ethical", "dedicated", "manipulative", "self-interested", "arrogant"
];
