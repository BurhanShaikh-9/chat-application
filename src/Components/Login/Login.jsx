import React from 'react'
import "./Login.css"
import Main from "../../Main"

export const Login = () => {
  return (
    <section className='body'>
        <div className='container'>
            <div className='logininnerdiv'>
                <div className='attributes'>
                    <div>
                    <p>Enter Your Name</p>
                    </div>
                    <div>
                    <input className='inputname' placeholder='Enter your name'>
                    </input>
                    </div>
                    <div>
                    <button onClick={pageRedirect()}>Chat</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}
<script>
    function pageRedirect() {
      window.location.href = <Main></Main>
    };
</script> 