    //build up our first functional comp
    /*
    function Welcome(){

    }
    export default Welcome;
    */
   /*
    export default function Welcome(){
    
   }
    */
   const Welcome = ({name,job}) =>{
        return(
            <>
            <h1>
                <h5>{name} does {job}</h5>
            </h1>
            </>
        );
   }
   export default Welcome;