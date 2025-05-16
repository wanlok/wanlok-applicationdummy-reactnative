//
//  ReactNativeDelegate.h
//  applicationdummy
//
//  Created by Robert Wan on 16/5/2025.
//

#import <RCTDefaultReactNativeFactoryDelegate.h>

@interface ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge;
- (NSURL *)bundleURL;

@end
