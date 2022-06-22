const template = (name, link) => {
    return `<!DOCTYPE html>
    <html>
        <head>
            <style>
              
               
                .content-container{
                    width:100%;
                    max-width:600px;
                   
                }
                .head-container{
                    width:100%;
                    padding:15px;
                    text-align:center;
                    color:white;
                    background-color:#00A8FF
                }
                .text-container{
                    padding:50px;
                }
    
                .text-container p {
                    color: rgba(0, 0, 0, 0.54)
                }
                .logo-container{
                    width:100%;
                }
                .footer{
                    background-color: #2d3436;
                     width:100%;
                     text-align:center;
                     color:white;
                     padding:10px;
                }
                .name{
                    padding:20px 10px;
                }
                .button {
                    
                    border: none;
                    color: white;
                    padding: 16px 32px;
                    text-align: center;
                    text-transform:uppercase;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    transition-duration: 0.4s;
                    cursor: pointer;
                    background-color: #00A8FF; 
                    color: white !important; 
                    cursor: pointer;
                    border: 2px solid #00A8FF;
                }
                
                
                .button-container{
                    width:100%;
                    cursor: pointer;
                    padding:20px 10px;
                }
                .footer-sec{
                    color:rgba(255, 255, 255, 0.5) !important;
                    text-decoration:none;
                }
    
            </style>
        </head>
        <body>
       
        <table align="center">
            
            <table align="center" class="content-container">
            <tr align="center">
                
                    <td align="center"><a href="https://dncjgec.in" ><img alt="DnC logo" src="https://dncjgec.in/static/media/Logo.f24318f8.png" style=height:30px;width:auto;margin:auto;></img></a></td>
                
            </tr>
                <tr class="head-container">
                    <td><h1>Verification</h1></td>
                </tr>
                <tr class="text-container">
                <td>
                    <p>
                        Hello ${name},
                    </p>
                    
                    <p>
                        Thank you for joining Divide and Conquer.
                    </p>
                    <p>
                        We received an verification request from your account, that's why you are receiving this email. Please click below on the verification button to verify your account.
                    </p>
                    <div class="button-container">
                        <div style="margin:auto;width:fit-content">
                           <a href="${link}" class="button button1"><strong>Verify</strong></a>
                        </div>
                    </div>
                    </td>
                </tr>
                <tr class="footer">
                <td style="padding:10px;">
                    <span><a href="https://dncjgec.in" style=color:white;>Copyright @ Divide and Conquer</a></span><br/>
                    <span ><a href="mailto:dncjgec@gmail.com" class="footer-sec">Report abuse | </span>
                    <span ><a href="https://dncjgec.in/contact/" class="footer-sec">Contact Us | </span>
                    <span ><a href="https://dncjgec.in/" class="footer-sec">Visit Us | </span> 
                    </td>
                </tr>
            <tr>
        </table>
       
        </body>
    </html>
    
`
}

const textTemplate = (name, link) => {
    return `Hello ${name}, \n\n Click on [ ${link} ] \n\n to verify yourself on divide and conquer.`
}

module.exports.verificationHtml = template
module.exports.verificationText = textTemplate
