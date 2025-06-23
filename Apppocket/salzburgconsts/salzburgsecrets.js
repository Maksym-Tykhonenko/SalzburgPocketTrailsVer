import {
    BlasiusChurch,
    CafeBazar,
    CafeTomaselliCourtyard,
    HellbrunnTrickFountains,
    JazzitMusicClub,
    Kajetanerplatz,
    KapuzinerbergViewpoint,
    MirabellGarden,
    ModerneTerrace,
    MonchsbergElevator,
    PfeifergasseCourtyard,
    SchlossLeopoldskronLake,
    SigmundCourtyard,
    SteingasseNight,
    StiftsbackereiPeter    
} from "../trailimprts/trailimgs";

const salzburgsecrets = [
    {
        question: '❓ Where’s the best city view?'.toUpperCase(),
        items: [
            {
                title: 'Kapuzinerberg Viewpoint'.toUpperCase(),
                previewText: 'A peaceful hilltop with forest trails and stunning views of Salzburg’s Old Town.',
                location: 'Kapuzinerberg, Salzburg 5020, Austria',
                description: 'High above the city’s baroque rooftops, Kapuzinerberg offers one of Salzburg’s most peaceful escapes. Locals know the quiet forest trails here lead to more than just fresh air — they end in sweeping vistas of the Old Town and fortress. The lack of crowds makes the view even more magical, especially during sunrise or the golden hour. It’s a place where Salzburg shows its softer, quieter soul.',
                cover: KapuzinerbergViewpoint,
                secret: 'If you hike all the way to the summit cross, take the little path to the left. There’s a wooden bench hidden under the trees — the perfect silent spot to see both the city and the Alps.'
            },
            {
                title: 'Museum der Moderne Terrace'.toUpperCase(),
                previewText: 'Modern terrace with panoramic views — a perfect mix of art and skyline.',
                location: 'Mönchsberg 32, 5020 Salzburg, Austria',
                description: 'While most visitors head indoors for modern art, locals step out onto the museum’s terrace for a living masterpiece. From this sleek platform, Salzburg’s skyline unfolds — spires, domes, mountains, and sky. It’s the perfect blend of nature, architecture, and creativity. On summer evenings, it’s not unusual to see artists sketching, couples sipping wine, or a quiet reader soaking in the scene.',
                cover: ModerneTerrace,
                secret: 'Before 11am, this terrace is nearly empty. Grab a coffee from the museum café and enjoy a peaceful skyline view — locals call it the city’s quietest rooftop.'
            },
            {
                title: 'Mönchsberg Elevator Exit'.toUpperCase(),
                previewText: 'Take the cliffside elevator and step into an epic cityscape.',
                location: 'Gstättengasse 13, 5020 Salzburg, Austria',
                description: 'Locals love the simple thrill of riding the Mönchsberg elevator up through solid rock, only to emerge into one of the city’s most cinematic moments. The platform outside offers a postcard-perfect view, ideal for catching your breath or finding perspective. It’s a quick escape — but one that leaves a lasting impression.',
                cover: MonchsbergElevator,
                secret: 'Once you step off the elevator, turn right and walk for five minutes. A low stone wall opens up to an incredible view of the Salzach River and cathedral domes — fewer people know about this angle.'
            }
        ]
    },
    {
        question: '❓ Where’s the real hidden strudel?'.toUpperCase(),
        items: [
            {
                title: 'Café Bazar'.toUpperCase(),
                previewText: 'A riverside classic since 1909 — strudel with a view.',
                location: 'Schwarzstraße 3, 5020 Salzburg, Austria',
                description: 'For over a century, Café Bazar has been a second home to Salzburgers who cherish tradition, conversation, and a view. Nestled along the river, this charming spot has an old-world elegance that pairs perfectly with its strudel. Locals c',
                cover: CafeBazar,
                secret: 'Ask for a window table on the left — you’ll get a dreamy river view with your strudel. And don’t forget to request it ‘mit Vanillesauce’ — locals swear by it!'
            },
            {
                title: 'Stiftsbäckerei St. Peter'.toUpperCase(),
                previewText: ' One of Europe’s oldest bakeries — wood-fired since the 1100s.',
                location: 'Kapitelplatz 8, 5020 Salzburg, Austria',
                description: 'Tucked beside the monastery walls, this bakery isn’t just old — it’s ancient. With wood-fired ovens that have been burning since the 1100s, it’s where Salzburgers go for bread (and strudel) that still tastes of history. It smells like warm stone and tradition, and the bakers greet regulars like family.',
                cover: StiftsbackereiPeter,
                secret: 'Follow the scent — the oven’s been baking for 800 years. Come just after 10am, when the first batch of apple strudel comes out warm and perfectly golden.'
            },
            {
                title: 'Café Tomaselli Courtyard'.toUpperCase(),
                previewText: 'Hidden garden space of Austria’s oldest coffee house.',
                location: 'Alter Markt 9, 5020 Salzburg, Austria',
                description: 'Behind one of Austria’s oldest coffee houses lies a leafy courtyard that feels worlds away from the busy square outside. Locals whisper about this spot like a secret garden — ivy on the walls, dappled sunlight, and strudel served on silver trays. Time slows here, just enough for a story or a second espresso.',
                cover: CafeTomaselliCourtyard,
                secret: 'Skip the front terrace. Head into the hidden courtyard in the back — quieter, greener, and full of locals enjoying strudel in the sun.'
            }
        ]
    },
    {
        question: '❓ Where’s a courtyard no tourists know?'.toUpperCase(),
        items: [
            {
                title: 'Pfeifergasse Courtyard'.toUpperCase(),
                previewText: 'Quiet arches, flowers, and stone benches — a true hidden gem.',
                location: 'Pfeifergasse 1–7, 5020 Salzburg, Austria',
                description: 'Step off the narrow alley and into this quiet courtyard, where stone benches and old archways cradle potted flowers and stillness. Few visitors find it, but locals treasure it — a hidden heart of the city, perfect for reading, resting, or daydreaming among centuries-old stones.',
                cover: PfeifergasseCourtyard,
                secret: 'Look for a small wooden door between house numbers 5 and 6. Behind it is a tiny courtyard with flowers and stone benches — like time stopped.'
            },
            {
                title: 'Kajetanerplatz'.toUpperCase(),
                previewText: 'Locals-only plaza near a peaceful baroque church.',
                location: 'Kajetanerplatz, 5020 Salzburg, Austria',
                description: 'This small, cobbled plaza near a baroque church feels untouched by time. Locals pass through on quiet errands, kids ride bikes across the square, and the occasional bench invites you to linger. There’s a serenity here that tourists often miss — but Salzburgers return to again and again.',
                cover: Kajetanerplatz,
                secret: 'It feels like a movie set in early morning. Locals stop by the little bakery on the corner, then sit in silence facing the baroque church.'
            },
            {
                title: 'Sigmund-Haffner-Gasse Courtyard'.toUpperCase(),
                previewText: 'Hidden arches and ivy — just off the busy streets.',
                location: 'Sigmund-Haffner-Gasse 14, 5020 Salzburg, Austria',
                description: 'Just steps from the busy streets, this ivy-covered courtyard is a whisper in stone. Locals slip in through side doors, enjoying the cool shadows and muffled sounds. It’s the kind of place you stumble upon once — and remember forever.',
                cover: SigmundCourtyard,
                secret: 'Tucked between two busy streets is a vine-covered escape. You won’t hear a thing — just birds and maybe a soft piano from a nearby window.'
            }
        ]
    },
    {
        question: '❓ Where do locals go for live music?'.toUpperCase(),
        items: [
            {
                title: 'Jazzit Music Club'.toUpperCase(),
                previewText: 'Underground jazz venue with heart and soul',
                location: 'Elisabethstraße 11, 5020 Salzburg, Austria',
                description: 'Raw, real, and underground — literally. Jazzit is where Salzburg’s music lovers gather for more than just jazz. The vibe is cozy, the sound is electric, and the faces in the crowd are as familiar as the musicians on stage. It’s a community in rhythm.',
                cover: JazzitMusicClub,
                secret: 'Wednesday nights are free jam sessions — you never know who’ll show up. Grab a beer, sit near the stage, and let the groove pull you in.'
            },
            {
                title: 'Mirabell Garden Evenings'.toUpperCase(),
                previewText: 'Summer evenings bring free classical concerts in the park.',
                location: 'Mirabellplatz 4, 5020 Salzburg, Austria',
                description: 'While tourists wander the gardens by day, locals know the real magic happens in the evenings. Classical ensembles often perform under the open sky, their notes floating among roses and marble fountains. It’s romantic, timeless — and entirely free.',
                cover: MirabellGarden,
                secret: 'Bring a picnic blanket and arrive early. Locals sit near the fountain with snacks and wine while the quartet plays under the sunset.'
            },
            {
                title: 'St. Blasius Church Concerts'.toUpperCase(),
                previewText: 'Acoustic magic inside one of Salzburg’s oldest churches.',
                location: 'Bürgerspitalgasse 2, 5020 Salzburg, Austria',
                description: 'Inside this Gothic gem, every note lingers longer. Locals come for small, soul-stirring concerts that turn the church’s echo into a second instrument. Candlelit and intimate, these performances feel like a sacred secret.',
                cover: BlasiusChurch,
                secret: 'Check the chalkboard outside on weekends — some of the best acoustic concerts happen spontaneously with visiting musicians.'
            }
        ]
    },
    {
        question: '❓ What place feels like a fairytale?'.toUpperCase(),
        items: [
            {
                title: 'Hellbrunn Trick Fountains'.toUpperCase(),
                previewText: ' A playful baroque park full of surprises and secret jets.',
                location: 'Fürstenweg 37, 5020 Salzburg, Austria',
                description: 'Locals love bringing guests here just to watch them get soaked. Hellbrunn’s playful fountains were designed to surprise, and centuries later, they still do. Behind the whimsy is a deep sense of baroque wonder — laughter and elegance flowing side by side.',
                cover: HellbrunnTrickFountains,
                secret: 'If you stand next to the unicorn statue — beware. That’s where the sneaky water jets hit first. Locals bring visitors here for laughs.'
            },
            {
                title: 'Steingasse at Night'.toUpperCase(),
                previewText: 'Narrow cobbled street lit by lanterns, straight out of a storybook.',
                location: 'Steingasse, 5020 Salzburg, Austria',
                description: 'Once a Roman road, now a lantern-lit fairytale. Locals walk here after dark for quiet conversations and moody beauty. Mossy walls, crooked doors, and absolute stillness make it feel more dream than street.',
                cover: SteingasseNight,
                secret: 'Take a slow walk after 10pm. Locals say you can hear your own footsteps echo through history — and sometimes catch a violin from an open window.'
            },
            {
                title: 'Schloss Leopoldskron Lake'.toUpperCase(),
                previewText: 'Mirror-like lake with a palace backdrop — like a dream.',
                location: 'Leopoldskronstraße 56-58, 5020 Salzburg, Austria',
                description: 'Locals call this lake the mirror, and on a calm morning, you’ll see why. With the palace on one side and mountains beyond, the reflection is almost unreal. It’s where Salzburg breathes deeply — and invites you to do the same.',
                cover: SchlossLeopoldskronLake,
                secret: 'Arrive at sunrise. The palace glows, the lake is glass, and only swans will be with you. It’s magic — and no tourists are around.'
            }
        ]
    }
];

export default salzburgsecrets;