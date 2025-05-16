//
//  ReactNativeDelegate.m
//  applicationdummy
//
//  Created by Robert Wan on 16/5/2025.
//

#import "ReactNativeDelegate.h"
#import <React/RCTBundleURLProvider.h>

@implementation ReactNativeDelegate

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL {
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
