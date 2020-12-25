
$MyEmail = "waytovalhalla@163.com"
$Password = "USYPIQNEZSRHCYRV"
$SMTP= "smtp.163.com"
$To = "waytovalhalla009@gmail.com"
$Subject = "BRO!"
$Body = "WHAT UP MR.POWERSCRIPTS?"
$Creds = (New-Object System.Management.Automation.PSCredential 'waytovalhalla@163.com',(convertto-securestring $Password -asplaintext -force))

Start-Sleep 2

Send-MailMessage -To $to -From $MyEmail -Subject $Subject -Body $Body -SmtpServer $SMTP -Attachments ('C:\eula.1028.txt') -Credential $Creds -Port 25 -DeliveryNotificationOption never