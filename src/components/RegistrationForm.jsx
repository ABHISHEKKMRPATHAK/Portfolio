export default function RegistrationForm(){
    return(
<form method="post" action="###">
    <fieldset>
    <label for="first-name">First Name<input id="first-name"type="text" required name="first-name"></input></label>
    <label for="last-name">Last Name<input type="text" id="last-name" required name="last-name"></input></label>
    <label for="email">E-mail<input type="email" id="email" required name="email"></input></label>
    <label for="password">Password<input type="password" id="password" pattern="[a-z0-5]{8,0}" name="password"></input></label>
    </fieldset>
      <fieldset>
        <legend> account-type required</legend>
        <label for="busines account">Buisness<input type="radio" name="account-type" id="'business-account"class="inline"></input></label>
        <label for="personal-account">Personal<input type="radio" name="account-type" checked id="personal-account"class="inline"></input></label>
        </fieldset>    
    <fieldset>
     <label for="profile-picture">Upload your profile picture<input id="profile-picture" type="file" required name="profile-picture"></input></label>
     <label for="age">Input your age: <input id="age" type="number" max={120} min={13} name="age"/></label>
     <label for="referrer">How do you hear about us ? 
        <select id="referrer" name="referrer">
            <option value="">Select One</option>
            <option value={1}>Linkedin</option>
            <option value={2}>Naukri</option>
            <option value={3}>Facebook</option>
            <option value={4}>Other</option>
        </select>
     </label>
    </fieldset>  
        <label for="terms-and-conditions">
            <input class="inline" id="terms-and-conditions" type="checkbox" required name="checkbox"/>I accept <a href="##">terms-and-conditions</a>
        </label>
<label for="bio">Provide a bio:
    <textarea id="bio" rows={3} cols={30} placeholder="I like coding in the beach....." name="bio">
AB
    </textarea>
</label>
    <input type="submit" value="Submit"></input>
</form>
    );
}