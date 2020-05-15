#!/usr/bin/perl -w 
use strict;
use XML::DOM; 

my $course_file= shift;
my $staff_file= shift;
 
my $parser = new XML::DOM::Parser; 
my $course = $parser->parsefile($course_file); 
my $staff = $parser->parsefile($staff_file); 
my $textinfo = "";
my $nodetext = "";

# Create the new node to insert in the course XML
my $newelement = $course->createElement('info'); 

# Go through every element in staff XML
foreach my $elem ($staff->getElementsByTagName("*"))
{
	foreach my $child ($elem->getChildNodes)
	{
		if (($child->getNodeType == TEXT_NODE)&&($child->getNodeValue !~ /\s+/))
        {
        	# .= is the concatenation operator
			$nodetext = $child->getNodeValue;
			$textinfo .= $nodetext . " ";
		}
	}
}

my $infotextnode = $course->createTextNode($textinfo);
$newelement->appendChild($infotextnode);

# Insert the new node into course XML

my @unit = $course->getElementsByTagName("course"); 
my $root = $unit[0];
$root->appendChild($newelement);

print $course->toString;

