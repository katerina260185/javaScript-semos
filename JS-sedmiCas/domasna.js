fetch ("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log(data))


async function generateUserName () {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users/1")
    if(!response.ok) {}
    const data = await response.json()
///
    const profileDiv = document.createElement("div")
    profileDiv.id = "profile"
    document.body.appendChild(profileDiv)
    profileDiv.style = "width:30%; height:400px; margin: 1% 35% 0%; "


    const header = document.createElement("header")
    header.id = "header"
    document.getElementById("profile").append(header)
    header.style= " width: 100%; height: 50px; background-color: rgb(5, 93, 58); display: flex;"

    const headerDiv1 = document.createElement("div")
    headerDiv1.id ="div1"
    document.getElementById("header").append(headerDiv1)
    headerDiv1.innerText = "Profile"
    headerDiv1.style = "display: flex; width: 50%;flex-direction: row;justify-content: space-between;color:#ccc; text-align: center; padding:10px 30px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; letter-spacing: 1px;"


    const headerDiv2 = document.createElement("div")
    headerDiv2.id ="div2"
    document.getElementById("header").append(headerDiv2)
    headerDiv2.innerText = "Change Password"
    headerDiv2.style = "display: flex; width: 50%;flex-direction: row;justify-content: space-between;color:#ccc; text-align: center; padding:10px 30px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; letter-spacing: 1px;"
 ///

    const main = document.createElement("div")
    main.id = "main"
    document.getElementById("profile").append(main)
    main.style= " width: 100%; height: 300px; background-color:#ccc; border-bottom:1px solid grey;"

    
    const userPic = document.createElement("img")
    userPic.setAttribute("src", "/JS-sedmiCas/woman-g650fe0aec_1920.jpg")
    document.getElementById("main").append(userPic)
    userPic.setAttribute( "width", "200px")
    userPic.setAttribute( "height", "250px")
    userPic.style = "border-radius: 50%; margin: 1% 30% 0; padding:50px 20px;"


    
    const firstName = document.createElement("p")
    firstName.innerText = data.name
    document.getElementById("main").append(firstName)
    firstName.style= "color: rgb(5, 93, 58); text-align: center; font-weight: bold; font-size: 25px "

    const infoUser = document.createElement("div")
    infoUser.id = "divInfoUser"
    document.body.appendChild(infoUser)
    infoUser.style = "width:30%; height:200px; background-color:#ccc; margin: 0% 35%; "
    
    const userEmail = document.createElement("h3")
    userEmail.innerText = `Email: ${data.email}`
    document.getElementById("divInfoUser").append(userEmail)
    userEmail.style="color: rgb(5, 93, 58); text-align: left; font-weight: bold; font-size: 15px; padding:10px 20px; margin: 0 20px;"
    
    const userAddress = document.createElement("h3")
    userAddress.innerText = `Address: ${data.address.street}, ${data.address.city}, ${data.address.zipcode} `
    document.getElementById("divInfoUser").append(userAddress)
    userAddress.style="color: rgb(5, 93, 58); text-align: left; font-weight: bold; font-size: 15px; padding:10px 20px; margin: 0 20px; "

    const userCompany = document.createElement("h3")
    userCompany.innerText = `Company: ${data.company.name}`
    document.getElementById("divInfoUser").append(userCompany)
    userCompany.style="color: rgb(5, 93, 58); text-align: left; font-weight: bold; font-size: 15px; padding:10px 20px; margin: 0 20px; "
    
    const userWebsite = document.createElement("h3")
    userWebsite.innerText = `Website: ${data.website}`
    document.getElementById("divInfoUser").append(userWebsite)
    userWebsite.style="color: rgb(5, 93, 58); text-align: left; font-weight: bold; font-size: 15px; padding:10px 20px; margin: 0 20px; "


   
}

generateUserName()
