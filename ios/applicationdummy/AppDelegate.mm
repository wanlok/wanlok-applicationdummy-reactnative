#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTLinkingManager.h>
#import <ReactAppDependencyProvider/RCTAppDependencyProvider.h>

#import "ReactNativeDelegate.h"
#import <RCTReactNativeFactory.h>

#import <Firebase.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  
//  ReactNativeDelegate *delegate = [[ReactNativeDelegate alloc] init];
//  RCTReactNativeFactory *factory = [[RCTReactNativeFactory alloc] initWithDelegate:delegate];
//  delegate.dependencyProvider = [RCTAppDependencyProvider new];
//  
//  self.reactNativeDelegate = delegate;
//  self.reactNativeFactory = factory;
//  
//  UIWindow *window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
//  
//  self.window = window;
//  
//  [factory startReactNativeWithModuleName:@"applicationdummy"
//                                 inWindow:window
//                            launchOptions:launchOptions];
//  
//  return true;
  
  self.moduleName = @"applicationdummy";
  self.dependencyProvider = [RCTAppDependencyProvider new];
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options
{
  return [RCTLinkingManager application:app openURL:url options:options];
}

- (NSURL *)bundleURL {
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

@end
