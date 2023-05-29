const {createApp} = Vue ;

createApp ({
    data () {
        return {
            email : []
        }
    },
    

    mounted (){

        for (i=0 ; i<10 ; i++)
        
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then( response => {
            this.email.push(response.data.response) 
            

        });

        
    }

    


}).mount ("#myapp")