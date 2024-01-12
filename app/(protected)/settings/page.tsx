'use client'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/user-current-user";
import {
    Card,
    CardHeader,
    CardContent,
  } from "@/components/ui/card";
import { UserIcon } from "lucide-react";
const SettingsPage = () => {
    const session = useCurrentUser();
    const onClick = () => {
        logout();
    }
    return (
        <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center pt-8 pb-12">
            {/* User Info */}
            <Card className="w-[600px] rounded shadow-lg border-none">
                {session && (
                    <div>
                        <div>
                            <h1 className="text-center text-5xl font-extrabold pt-5">User Info</h1>
                        </div>
                        {/* Separator*/}
                        <div className='flex items-center justify-center'>
                            <Separator className='w-20 h-0.5 rounded bg-slate-200 mt-3'/>
                        </div>
                        {/* User Name */}
                        <CardContent className="pt-10 space-y-6 font-bold">
                            <div className="flex flex-row items-center justify-between rounded p-3 shadow-sm shadow-white ">
                                <h2 className="text-2xl text-slate-300">name</h2>
                                <h2 className="text-xl text-white">
                                {session.name}<FavoriteIcon fontSize="large" className="text-red-500 pb-1"/>
                                </h2>
                            </div>
                        {/* User Email */}
                            <div className="flex flex-row items-center justify-between rounded p-3 shadow-sm shadow-white ">
                                <h2 className="text-2xl text-slate-300">email</h2>
                                <h2 className="text-xl text-white">
                                {session.email}<VerifiedIcon fontSize="large" className="text-blue-400 pb-1"/>
                                </h2>
                            </div>
                        {/*User Type*/}
                            <div className="flex flex-row items-center justify-between rounded p-3 shadow-sm shadow-white ">
                                <h2 className="text-2xl text-slate-300">user type</h2>
                                <h2 className="text-xl text-white">
                                {session.role}
                                </h2>
                            </div>
                        {/* User ID */}
                            <div className="flex flex-row items-center justify-between rounded p-3 shadow-sm shadow-white ">
                                <h2 className="text-2xl text-slate-300">user id</h2>
                                <h2 className="text-xl text-white">
                                {session.id}
                                </h2>
                            </div>
                        {/* Sign Out*/}
                        <div className="">
                        <Button type='submit' variant="gold" className="" onClick={onClick}>Sign Out</Button>
                        </div>
                        </CardContent>
                        
                    </div>
                    
                )}
                
            </Card>
            {/* Manage Account */}
            <Card className="w-[600px] shadow-lg text-center font-bold border-none">
                <h1 className="text-5xl font-extrabold pt-5">Manage Account</h1>
                {/* Separator */}
                <div className='flex items-center justify-center'>
                            <Separator className='w-20 h-0.5 rounded bg-slate-200 mt-3'/>
                </div>
                <CardContent>
                    <div className="flex flex-row items-center justify-between rounded p-3 pt-8">
                        <Button className="bg-red-500 rounded hover:bg-red-500 hover:scale-105 duration-500 transition-transform">Purchase History</Button>
                    </div>
                    <div className="flex flex-row items-center justify-between rounded p-3">
                        <Button className="bg-red-500 rounded hover:bg-red-500 hover:scale-105 duration-500 transition-transform">Reciepts</Button>
                    </div>
                    <div className="flex flex-row items-center justify-between rounded p-3">
                        <Button className="bg-red-500 hover:bg-red-500 rounded hover:scale-105 duration-500 transition-transform">Invoices</Button>
                    </div>
                </CardContent>
                

            </Card>
            {/* FAQ */}
            <Card className="w-[600px] shadow-lg text-center font-bold border-none">
                <h1 className="text-5xl font-extrabold pt-5">Questions</h1>
                {/* Separator */}
                <div className='flex items-center justify-center'>
                            <Separator className='w-20 h-0.5 rounded bg-slate-200 mt-3'/>
                </div>
                <CardContent>
                    
                </CardContent>
                

            </Card>
            {/* Help */}
            <Card className="w-[600px] shadow-lg text-center font-bold border-none">
                <h1 className="text-5xl font-extrabold pt-5">Questions</h1>
                {/* Separator */}
                <div className='flex items-center justify-center'>
                            <Separator className='w-20 h-0.5 rounded bg-slate-200 mt-3'/>
                </div>
                <CardContent>
                    
                </CardContent>
                

            </Card>
            
            
        </div>
    )
}

export default SettingsPage;
