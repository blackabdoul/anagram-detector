function Anagram(content){
    this.content = content;

    // remove punctuation and spaces
    this.puncContent = function puncContent(){
        let puncString = this.content.replace(/[\W_]/g, '');
        return puncString;
    }

    // remove punctuation and spaces and make it lowercase
    this.processedContent = function processedContent(){
        let processedString = this.puncContent().toLowerCase();
        return processedString;
    }

    // sort the cleaned characters so order no longer matters
    this.sortedContent = function sortedContent(){
        return this.processedContent().split('').sort().join('');
    }

    // check if another string is an anagram of this one
    this.isAnagramOf = function isAnagramOf(other){
        // accept either a raw string or another Anagram instance
        let otherAnagram = (other instanceof Anagram) ? other : new Anagram(other);
        return this.sortedContent() === otherAnagram.sortedContent();
    }
}

module.exports = Anagram;