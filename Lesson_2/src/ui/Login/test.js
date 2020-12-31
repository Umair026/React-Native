// Define multiple groups of screens in objects like this
const commonScreens = {
    Help: HelpScreen,
  };
  
  const authScreens = {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  };
  
  const userScreens = {
    Home: HomeScreen,
    Profile: ProfileScreen,
  };
  
  // Then use them in your components by looping over the object and creating screen configs
  // You could extract this logic to a utility function and reuse it to simplify your code
  <Stack.Navigator>
    {Object.entries({
      // Use the screens normally
      ...commonScreens,
      // Use some screens conditionally based on some condition
      ...(isLoggedIn ? userScreens : authScreens),
    }).map(([name, component]) => (
      <Stack.Screen name={name} component={component} />
    ))}
  </Stack.Navigator>;