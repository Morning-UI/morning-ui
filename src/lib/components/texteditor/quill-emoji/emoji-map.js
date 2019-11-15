import emojiList from './emoji-list';

const emojiMap = {};

emojiList.forEach(emojiListObject => {

    emojiMap[emojiListObject.n] = emojiListObject;

});

export default emojiMap;
