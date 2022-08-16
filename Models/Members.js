class Members{
    constructor(id,user_name,password,phone_number,first_name,last_name,email,address,gender){
    this.id = id;
    this.user_name = user_name;
    this.password = password;
    this.phone_number = phone_number;
    this.first_name = first_name
    this.last_name = last_name;
    this.email = email;
    this.address= address;
    this.gender = gender;


    }

    getid(){
        return this.id;
    }
    getuser_name(){
        return this.user_name;
    }
    getpassword(){
        return this.password;
    }
    getphone_number(){
        return this.phone_number;
    }
    getfirst_name(){
        return this.first_name;
    }
    getlast_name(){
        return this.last_name;
    }
    getemail(){
        return this.email;
    }
     getaddress(){
         return this.address;
     }
    getgender(){
        return this.gender;
    }

    setid(id){
        this.id = id;
    }
    setuser_name(user_name){
        this.user_name = user_name;
    }
    setpassword(password){
        this.password = password;
    }
    setphone_number(phone_number){
        this.phone_number = phone_number;
    }
    setfirst_name(first_name){
        this.first_name = first_name;
    }
    setlast_name(last_name){
        this.last_name(last_name)= last_name;
    }
     setemail(email){
        this.email = email;
    }
    setaddress(address){
    this.address(address)= address;
    }
    setgender(gender){
        this.gender(gender)= gender;
    }
}

module.exports = Members;