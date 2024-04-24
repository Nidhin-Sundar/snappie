import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import  {Account, User as AuthUser } from "next-auth";
import User from "/models/User"
import connectDB from "/utils/db";
import bcrypt from "bcrypt";

 const authOptions = {
    secret:process.env.NEXT_AUTH_SECRET,
    providers:[
        CredentialsProvider({
id:"credentials",
name:"Credentials",
credentials:{
    email:{label:"Email",type:"text"},
    password:{label:"Password",type:"password"} 
},
async authorize(credentials){
    await connectDB();
    try{
        const user = await User.findOne({email:credentials.email});
        if(user){
            const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
            );
            if(isPasswordCorrect){
                return user;
            }
        }
    
} catch (err) {
    throw new Error(err);
}
  }  })
        ],

        callbacks: {
            async signIn({user,account}){
                if (account.provider == "credentials") {
                    return true;
                }
            }
        }
};

 const handler=NextAuth(authOptions);

export {handler as GET,handler as POST};