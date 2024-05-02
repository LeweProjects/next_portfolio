import { useEffect, useState } from "react";
//import { supabase } from "../../../config/supabase";


const FetchProfile = () => {
  type Profile = {
    name:string;
  }

  const [profile, setProfile] = useState<Profile[]>([]);

  // useEffect(() => {
  //   async function fetchProfileData() {
  //     const resp = await supabase.from("profile").select("*");
  //     if(resp.data){
  //       setProfile(resp.data);
  //     }
  //   }
  //   fetchProfileData();
  // }, []);

  return {profile};
};

export default FetchProfile;
