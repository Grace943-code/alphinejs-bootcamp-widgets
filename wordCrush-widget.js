document.addEventListener('alpine:init', () => {

    Alpine.data('wordCrushWidget', function () {
        return {
            sentence : '',
            word: '',
            LongestWord: '',
            ShortestWord: '',
            showWord: false,
            WordLength: '',
            play(){
                this.LongestWord = longestWord(this.word, this.sentence);
                this.ShortestWord = shortestWord(this.word, this.sentence);
                this.WordLength = wordLengths(this.word, this.sentence);
                setTimeout(() => {
                    this.showWord=false;
                    this. word = '';
                    this.LongestWord = '';
                    this.ShortestWord = '';
                    this.WordLength = '';

                }, 3000);
            }
        }
    });
        
})