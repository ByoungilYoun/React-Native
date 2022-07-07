//
//  Counter.swift
//  nativeModulesIos
//
//  Created by 윤병일 on 2022/05/12.
//

import Foundation

@objc(Counter)
class Counter : RCTEventEmitter {
  
  private var count = 0
  
  @objc
  func increment(_ callback : RCTResponseSenderBlock) {
    count += 1
//    print(count)
    callback([count])
    sendEvent(withName: "onIncrement", body: ["count increase", count])
  }
  
  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true; // JavaScript code 가 execute 하기 전에 메인 쓰레드에서 작동하도록
  }
  
  @objc
  override func constantsToExport() -> [AnyHashable : Any]! {
    return ["initialCount" : 0]
  }
  
  override func supportedEvents() -> [String]! {
    return ["onIncrement","onDecrement"]
  }
  
  @objc
  func decrement(_ resolve : RCTPromiseResolveBlock, reject : RCTPromiseRejectBlock) {
    if count == 0 {
      let error = NSError(domain: "", code: 200, userInfo: nil)
      reject("Error_Count", "count cannot be negative", error)
    } else {
      count -= 1
      resolve("count is \(count)")
      sendEvent(withName: "onDecrement", body: ["count decrease", count])
    }
  }
}
