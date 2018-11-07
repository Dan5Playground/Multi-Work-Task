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
        sceneDesc : "A small village has almost been destroyed by a dragon. All the " +
            "treasures the villagers possessed were taken. The knight, K, " +
            "in the village seeks to defeat the dragon to rebuild the village." +
            " But first, K needs a magic sword which can only be built using the raw" +
            " steel from Gerald, who is a merchant in the village",
        characters : [
            {name : "K",
                // format for prompts :  Char is PROMPT
                prompt : [
                    "a manipulative person who always attempts to control a situation" +
                    " or a person",
                    "an ethical and creative person",
                    "Charlie's ex-girlfriend"]},
            {name : "Gerald",
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
