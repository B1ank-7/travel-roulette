package com.travel.roulette;
import android.app.Activity;import android.os.Bundle;import android.webkit.*;
public class MainActivity extends Activity{
protected void onCreate(Bundle s){super.onCreate(s);
WebView wv=new WebView(this);wv.getSettings().setJavaScriptEnabled(true);
wv.setWebViewClient(new WebViewClient());
wv.loadUrl("https://b1ank-7.github.io/travel-roulette/");
setContentView(wv);}}
