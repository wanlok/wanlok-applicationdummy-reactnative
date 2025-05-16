#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import "ReactNativeDelegate.h"
#import <RCTReactNativeFactory.h>

@interface AppDelegate : RCTAppDelegate

@property (nonatomic, strong) UIWindow *window;
@property (nonatomic, strong) ReactNativeDelegate *reactNativeDelegate;
@property (nonatomic, strong) RCTReactNativeFactory *reactNativeFactory;

@end
