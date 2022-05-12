//
//  Counter.swift
//  nativeModulesIos
//
//  Created by 윤병일 on 2022/05/12.
//

import Foundation

@objc(Counter)
class Counter : NSObject {
  
  private var count = 0
  
  @objc
  func increment(_ callback : RCTResponseSenderBlock) {
    count += 1
//    print(count)
    callback([count])
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true; // JavaScript code 가 execute 하기 전에 메인 쓰레드에서 작동하도록
  }
  
  @objc
  func constantsToExport() -> [String : Any]! {
    return ["initialCount" : 0]
  }
}
