// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"

// export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
//   return (
//     <Card {...props}>
//       <CardHeader>
//         <CardTitle>Create an account</CardTitle>
//         <CardDescription>
//           Enter your information below to create your account
//         </CardDescription>
//       </CardHeader>

//       <CardContent>
//         <form className="space-y-6">
//           <div className="space-y-2">
//             <Label htmlFor="name">Full Name</Label>
//             <Input id="name" type="text" placeholder="John Doe" required />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//             />
//             {/* <p className="text-sm text-muted-foreground">
//               We&apos;ll use this to contact you. We will not share your email
//               with anyone else.
//             </p> */}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="password">Password</Label>
//             <Input id="password" type="password" required />
//             <p className="text-sm text-muted-foreground">
//               Must be at least 8 characters long.
//             </p>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="confirm-password">Confirm Password</Label>
//             <Input id="confirm-password" type="password" required />
//             <p className="text-sm text-muted-foreground">
//               Please confirm your password.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3">
//             <Button type="submit" className="w-full p-6">
//               Create Account
//             </Button>

//             <Button variant="outline" type="button" className="w-full p-6">
//               Sign up with Google
//             </Button>
//           </div>

//           <p className="text-center text-sm text-muted-foreground">
//             Already have an account?{" "}
//             <a href="#" className="underline underline-offset-4">
//               Sign in
//             </a>
//           </p>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }
export function SignupForm() {
return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <div className="flex flex-col justify-center w-full max-w-80 rounded-xl px-6 py-8 border border-slate-700 bg-slate-900 text-white text-sm">
                <h2 className="text-2xl font-semibold">Sign In</h2>
                <p className="text-slate-300 mt-1">Login to your account</p>
                <form className="mt-8" onsubmit="return false">
                    <label htmlFor="email" className="block mb-1 font-medium text-slate-300">Email address</label>
                    <input type="email" id="email" name="email" placeholder="Email" className="w-full p-2 mb-3 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500" />
            
                    <label htmlFor="password" className="block mb-1 font-medium text-slate-300">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" className="w-full p-2 mb-2 bg-slate-900 border border-slate-700 rounded-md focus:outline-none focus:ring-1 transition focus:ring-indigo-500 focus:border-indigo-500" />
                    <div className="text-right">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full mt-10 px-4 py-2.5 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</button>
                </form>
            </div>
        </>
    )
}