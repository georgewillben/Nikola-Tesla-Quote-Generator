const messages = [
    'I don\'t care that they stole my idea . . I care that they don\'t have \
any of their own.',
    'Of all things, I liked books best.',
    'The present is theirs; the future, for which I really worked, is mine.',
    'If your hate could be turned into electricity, it would light up the wh\
ole world.',
    'What we now want is closer contact and better understanding between indi\
viduals and communities all over the earth, and the elimination of egoism\
 and pride which is always prone to plunge the world into primeval barbar\
ism and strife... Peace can only come as a natural consequence of univer\
sal enlightenment...',
    'All that was great in the past was ridiculed, condemned, combated, suppr\
essed — only to emerge all the more powerfully, all the more triumphantly\
 from the struggle.'
]
const randIndex = Math.floor(Math.random() * messages.length)
const messageToLog = messages[randIndex]
console.log(`\"${messageToLog}\" \n  - Nikola Tesla`)
