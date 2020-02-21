---
title: Google Cloud Server Setup
date: 2019-10-23
tags:
- Server
---


remote ssh

修改root passwd
sudo -i
passwd

1.切换到 root
sudo -i
2.编辑ssh配置文件
vi /etc/ssh/sshd_config
3.修改以下内容即可
PermitRootLogin yes
PasswordAuthentication yes
4.重启ssh
service sshd restart

远程上去新加用户(例如:tester)

adduser tester

把 tester 加入 sudoer


