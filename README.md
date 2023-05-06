1. Step 1
Create FLet App 

2. step 2
Deploy Flet to surge
npm install --global surge

3.step 3
Create Cordova Project with command
cordova create com.simple.flet

4.step 4
Install inappbrowser in cordova
cordova plugin add cordova-plugin-inappbrowser

and cordova platform add android


5. step 5
Install you android studio and setting sdk tools to 30 version

6. step 6
==> set you Java version to java 11 
java --version

YOU MUST USE JAVA 11 VERSION IF YOU > 11 THEN ERRROR


==> download gradle from google 
and extract to /opt




==> add .bashrc

FILE .bashrc
====================================================
#export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64/
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/

#export ANDROID_HOME=/root/Android/Sdk
export ANDROID_SDK_ROOT=/root/Android/Sdk
#export PATH=$PATH:$ANDROID_HOME/tools
#export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools/
export PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator/

#export PATH=$PATH:/opt/gradle/gradle-8.1.1/bin
export PATH=$PATH:/opt/gradle/gradle-7.6/bin

=============================================================


7. step 7
Load bashrc with command
source /home/mopt/.bashrc

8. step 8
Test Debug Mode with cordova and Flet
cordova run android

AND CHECK ANDROID CONNECT WITH COMMAND adb devices 


NOW BUILD TO APK RELEASE

9.step 9
Create keystore with command
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -sigalg SHA1withRSA -keysize 2048 -validity 10000


10. step 10
add file build.json for keystore




11. step 11
Build aab package with cordova build 
cordova build android --release --buildConfig=build.json --packageType=apk


12. step 12
==> Download BundleTool from google and add to alias
 
 alias bundletool='java -jar /home/mopt/Downloads/bundletool-all-1.14.1.jar '

===> convert aab to apks with command


bundletool build-apks  --bundle=platforms/android/app/build/outputs/bundle/release/app-release.aab --output=dada.apks  --ks=myrelease.keystore --ks-pass=pass:admin12345 --ks-key-alias=fletapp  

13. step 13
rename youapp.apks to youapp.zip and extract 
then you get file apk

14. step 14
test and install to you android devices
FINISH.......

