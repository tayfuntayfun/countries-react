import React from 'react'

export default function NavBar() {

    let changeBackground

    const darkMode = () => {

        if(changeBackground) {
            document.body.style.setProperty('--background-color', 'hsl(0, 0%, 98%)');
            document.body.style.setProperty('--text-color', 'hsl(200, 15%, 8%)');
            document.body.style.setProperty('--elements-color', 'hsl(0, 0%, 100%)');
  
            changeBackground = false;  
          } else {
            document.body.style.setProperty('--background-color', 'hsl(207, 26%, 17%)');
            document.body.style.setProperty('--text-color', 'hsl(0, 0%, 100%)');
            document.body.style.setProperty('--elements-color', 'hsl(209, 23%, 22%)');
            document.querySelector('.darkMode').style.borderColor= "blanchedalmond";
            
            changeBackground = true;
          }
  
    }
    return (
    <nav className="nav">
        <div className="titleText">Where in the world?</div>
        <div className="darkMode" onClick={darkMode}>Dark mode</div>        
    </nav>
    )
}
