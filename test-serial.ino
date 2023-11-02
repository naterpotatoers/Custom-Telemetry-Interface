void setup()
{
  Serial.begin(9600);
}

static char oldString[100] = "{\"throttle\":0,\"pitch\":0,\"roll\":0,\"yaw\":0}";
void loop()
{
  // basically want a loop that will listen print out oldString every few seconds but is updated if a new string is received
  if (Serial.available())
  {
    char newString[100];
    Serial.readBytesUntil('\n', newString, 100);
    strcpy(oldString, newString);
  }
  Serial.println(oldString);
  delay(1000);
}