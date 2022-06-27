package com.mrz.androidleaftlet.Intro;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.view.animation.LinearInterpolator;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import com.mrz.androidleaftlet.MainActivity;
import com.mrz.androidleaftlet.R;

public class SplashScreen extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash_screen);

        LinearLayout containerLL = (LinearLayout) findViewById(R.id.container);

/*
        TashieLoader tashie = new TashieLoader(
                this, 5,
                30, 10,
                ContextCompat.getColor(this, R.color.purple_200));

        tashie.setAnimDuration(500);
        tashie.setAnimDelay(100);
        tashie.setInterpolator(new LinearInterpolator());

        containerLL.addView(tashie);

*/

        new Handler().postDelayed(new Runnable(){
            @Override
            public void run() {

                SplashScreen.this.finish();
                startActivity(new Intent(getApplicationContext(), MainActivity.class));
            }
        }, 3000);

    }


}
