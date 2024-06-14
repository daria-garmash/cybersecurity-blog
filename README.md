<h1>Personal Cybersecurity Blog</h1>
This are src files for my <b> Personal Cybersecurity Blog </b>, which I developed as part of my <b>Monash Cybersecurity Bootcamp Project 1</b>.
<br></br>
The purpose of the project is to apply the skills I acquired during he first half of the Bootcamp to secure and protect a cloud application that hosts my cybersecurity blog.

To access the application proceed to <a href="https://dgarmashsecurity.azurewebsites.net/">this page</a>.
<br></br>
<h3>3 major steps were taken to complete the project:</h3>
<ul>
  <li><b>Step 1: Create an Application.</b> 
    <p>Goal was to design, build and host a web app with Azure Web App service. An Azure Web App was created and then a docker container was deployed on the app. The app uses PHP 8.2 as a runtime stack and Linux as an OS. Design on the web page was updated by modifying HTML and CSS files as well as adding a JS script to increase functionality.
    </p>
  </li>
  <li><b>Step 2: Securing the App with SSL certificates.</b> 
    <p> Firstly, an Azure Key Vault was created with Vault Access policy to grant data access. To generate a self-signed SSL certificate the following openssl commands were used:
     <p><code>openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout &lt;privatekeyname.key&gt; -out &lt;certificatename.crt&gt; -addext "extendedKeyUsage=serverAuth"</code> </p> 
      <p><code>openssl pkcs12 -export -out &lt;new_certificatename.pfx&gt; -inkey &lt;keyname.key&gt; -in &lt;certificename.crt&gt;</code></p> 
    Then the certificate was downloaded to a local machine and uploaded to the Key Vault. This step was completed for learning purposes only, as Azure Web App had already supplied a default SSL certificate after the app was created in Step 1.
    </p>
  </li>
  <li><b>Step 3: Protect the Application.</b> 
    <p> To protect the web application a number of Azure security features were used. A Regional WAF (Application gateway) policy was created to protect users in a specific geagraphical area from common threats, including OWASP top 10. Then a custom rule was added to only allow traffic from Australia, Canada and the USA. It should be noted that the rule can be bypassed with VPN or Proxy. Lastly, Azure Security Center Recomendations were analyzed and it was concluded, based on their nature and medium severity, that currently they can be ignored.
    </p>
  </li>
</ul>

<h3>To modify the application:</h3>
<ol>
  <li>SSH to the web app container.</li>
  <li>Back up current state of the code.</li>
  <li>Pull latest changes.
  <p><code>git pull --no-rebase origin main</code></p>
  </li>
  <li>Replace the current code with the latest changes.</li>
  <li>Refresh the website and check.</li>
</ol>
