//
//  Counter.m
//  nativeModulesIos
//
//  Created by 윤병일 on 2022/05/12.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter) // RCT_EXTERN_MODULE 은 매크로

RCT_EXTERN_METHOD(increment : (RTCResonseSenderBlock)callback) // 메서드 추가

RCT_EXTERN_METHOD(decrement : (RCTPromiseResolveBlock)resolve
                  reject : (RCTPromiseReject))

@end
