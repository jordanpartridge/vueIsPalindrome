let app = new Vue({
    el: '#app',
    data : {
        palindrome: '',
        isPalindrome: false,


    },
    computed: {
        message: () => {

            if(this.isPalindrome){
                return 'This is a palindrome';
            } else {
                return 'This is not a palindrome';
            }
        }

    },
    methods: {
        palindromeCheck(){
            /**
             * todo: remove possible punctuation as well
             * @type {string}
             */
            this.isPalindrome = true;
            let s = this.palindrome.replace(/.\s/g,'').toLowerCase();
            let n = s.length;
            for(i = 0; i < n/2; i++){
                if (s.charAt(i) != s.charAt(n-1-i)){
                    this.isPalindrome = false;


                }
            }
        }

    }
})