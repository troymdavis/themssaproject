var words = [
    'like spaghetti.', "like dogs.",
    "like hamsters.",
    "like the caramel popcorn in those huge popcorn tins.",
    "like melting army men figurines.",
    "like documentaries.",
    'like TED talks.',
    'like CRISPR.',
    'like beaches.',
    'like sandwiches.',
    'like living beyond your means.',
    'like pulling loose threads on your clothes.',
    'like fresh haircuts.',
    'like slap bracelets.',
    'like fidget spinners.',
    'like Tamagotchi pets.',
    'like boneless fish.',
    'like Cheesecake Factory.',
    'like Hula hoops.',
    'like Fruit Loops.',
    'like Edible Arrangements.',
    'hate pop rocks.',
    'like free trials of Netflix.',
    'like paying lost bets with scratch tickets.',
    'like In-N-Out.'
]

function newWord() {
    var randomWord = Math.floor(Math.random() * (words.length));
    document.getElementById('wordDisplay').innerHTML = words[randomNumber];
}