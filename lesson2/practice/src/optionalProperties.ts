// 1
interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo(userInfo: UserInfo): string {
  // takes a UserInfor object
  // returns a formatted string containing the user's information
  // for optional properties, display a default value if not provided
    // ie "N/A" for email and "unknown" for age

  return `Name: ${userInfo.name};
          Email: ${userInfo.email ? userInfo.email : "N/A"}; 
          Age: ${userInfo.age ? userInfo.age : 'unkown'}`;
}


