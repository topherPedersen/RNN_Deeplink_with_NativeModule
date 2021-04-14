package com.rnn_deeplink_with_nativemodule;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class MyNativeModule extends ReactContextBaseJavaModule {
    MyNativeModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "MyNativeModule";
    }

    @ReactMethod
    public void sayHello() {
        Log.i("nativemodules", "hello, world");
    }

    @ReactMethod
    public void launchNativeActivity() {
        Intent intent = new Intent(getReactApplicationContext(), MyNativeActivity.class);
        Activity currentActivity = getCurrentActivity();
        currentActivity.startActivity(intent);
    }
}